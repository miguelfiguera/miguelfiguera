"use server";
import { adminAuth } from "@/lib/firebase/firebaseAdmin";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  claimsSchema,
  loginCredentialsSchema,
  adminCreationSchema,
  claimsUpdateSchema,
  securityCheckResponseSchema,
  type ClaimsSchema,
} from "@/lib/schemas/auth.schemas";

// This are the main functions to create users and modify users.

//search user by email to check if it exists
export const searchUserByEmail = async (email: string) => {
  try {
    const validation = z.string().email().safeParse(email);
    if (!validation.success) {
      throw new Error("Invalid email format");
    }
    const user = await adminAuth.getUserByEmail(validation.data);
    if (user) {
      console.log("User already exists:", validation.data);
      return user.uid;
    }
    return false;
  } catch (error) {
    console.error("Error searching user:", error);
    return false;
  }
};

//get custom claims, custom claims are permissions like admin or so.

export const getUserCustomClaims = async (uid: string) => {
  try {
    const validation = z.string().min(1).safeParse(uid);
    if (!validation.success) {
      throw new Error("Invalid user ID");
    }
    const user = await adminAuth.getUser(validation.data);
    const claimsValidation = claimsSchema.safeParse(user.customClaims);
    if (!claimsValidation.success) {
      throw new Error("Invalid custom claims format");
    }
    console.log("Successfully got custom claims:", claimsValidation.data);
    return claimsValidation.data;
  } catch (error) {
    console.error("Error getting custom claims:", error);
    return null;
  }
};

// modify customClaims so each user can add public roles
export const modifyCustomClaims = async (uid: string, claims: ClaimsSchema) => {
  try {
    const validation = claimsUpdateSchema.safeParse({ uid, claims });
    if (!validation.success) {
      throw new Error("Invalid claims update data");
    }
    await adminAuth.setCustomUserClaims(
      validation.data.uid,
      validation.data.claims
    );
    revalidatePath("/profile");
    return true;
  } catch (error) {
    console.error("Error modifying custom claims:", error);
    return false;
  }
};

//createAdmin

export const createAdmin = async (email: string, password: string) => {
  try {
    const validation = adminCreationSchema.safeParse({ email, password });
    if (!validation.success) {
      throw new Error("Invalid admin creation data");
    }
    const userCredential = await adminAuth.createUser({
      email: validation.data.email,
      password: validation.data.password,
    });
    console.log("Successfully created new user:", userCredential.uid);
    await adminAuth.setCustomUserClaims(userCredential.uid, {
      admin: true,
    });
    return userCredential;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

//Login User

export const loginUser = async (email: string, password: string) => {
  try {
    const validation = loginCredentialsSchema.safeParse({ email, password });
    if (!validation.success) {
      throw new Error("Invalid login credentials");
    }
    const user = await signInWithEmailAndPassword(
      auth,
      validation.data.email,
      validation.data.password
    );
    const idToken = await user.user.getIdToken();
    const expirationTime = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: expirationTime,
    });

    const options = {
      name: "session",
      value: sessionCookie,
      maxAge: expirationTime,
      httpOnly: true,
      secure: true,
      sameSite: "strict" as const,
    };
    const myCookies = await cookies();
    myCookies.set(options);
    console.log("Successfully logged in user:", user.user);
    signOut(auth);
    return true;
  } catch (error) {
    console.error("Error logging in user:", error);
    return null;
  }
};

// securityCheck for login

export const securityCheck = async () => {
  try {
    const session = await cookies();
    const sessionValue = session.get("session");
    if (!sessionValue) {
      return false;
    }

    const decodedToken = await adminAuth.verifySessionCookie(
      sessionValue.value,
      true
    );
    if (!decodedToken) {
      return false;
    }

    const user = await adminAuth.getUser(decodedToken.uid);
    const parsed = user.toJSON();
    const validation = securityCheckResponseSchema.safeParse({
      parsed,
      valid: true,
    });
    if (!validation.success) {
      throw new Error("Invalid security check response");
    }
    return validation.data;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

// logOut function to kill the session cookie
export const logoutUser = async () => {
  try {
    const session = await cookies();
    const sessionValue = session.get("session");

    if (sessionValue) {
      // Revoke the user's refresh token on firebase backend
      await adminAuth.revokeRefreshTokens(sessionValue.value);
      // kill the cookie on the client to kill the session
      const options = {
        name: "session",
        value: "",
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: "strict" as const,
      };
      const myCookies = await cookies();
      myCookies.set(options);
    }

    console.log("Session terminated.");
    return true;
  } catch (error) {
    console.error("Error logging out user:", error);
    return false;
  }
};

// Get user ID from cookie
export const getUserIdFromCookie = async () => {
  try {
    const session = await cookies();
    const sessionValue = session.get("session");
    if (!sessionValue) {
      return null;
    }
    const decodedToken = await adminAuth.verifySessionCookie(
      sessionValue.value,
      true
    );
    if (!decodedToken) {
      return null;
    }
    const validation = z.string().min(1).safeParse(decodedToken.uid);
    if (!validation.success) {
      throw new Error("Invalid user ID from token");
    }
    return validation.data;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

export const getUserFromCookie = async () => {
  try {
    const session = await cookies();
    const sessionValue = session.get("session");
    if (!sessionValue) {
      return null;
    }
    const decodedToken = await adminAuth.verifySessionCookie(
      sessionValue.value,
      true
    );
    if (!decodedToken) {
      return null;
    }
    const validation = z.string().min(1).safeParse(decodedToken.uid);
    if (!validation.success) {
      throw new Error("Invalid user ID from token");
    }
    return validation.data;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
