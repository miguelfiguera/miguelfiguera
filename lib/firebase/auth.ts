"use server";
import { adminAuth } from "@/lib/firebase/firebaseAdmin";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { cookies } from "next/headers";
import { Claims } from "@/lib/types/auth.types";
import { revalidatePath } from "next/cache";

// This are the main functions to create users and modify users.

//search user by email to check if it exists
export const searchUserByEmail = async (email: string) => {
  const user = await adminAuth.getUserByEmail(email);
  if (user) {
    console.log("User already exists:", email);
    return user.uid;
  }
  return false;
};

//get custom claims, custom claims are permissions like admin or so.

export const getUserCustomClaims = async (uid: string) => {
  try {
    const user = await adminAuth.getUser(uid);
    console.log("Successfully got custom claims:", user.customClaims);
    return user.customClaims as Claims;
  } catch (error) {
    console.error("Error getting custom claims:", error);
    return null;
  }
};

// modify customClaims so each user can add public roles
export const modifyCustomClaims = async (uid: string, claims: Claims) => {
  try {
    await adminAuth.setCustomUserClaims(uid, claims);
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
    const userCredential = await adminAuth.createUser({
      email: email,
      password: password,
    });
    console.log("Successfully created new user:", userCredential.uid);
    adminAuth.setCustomUserClaims(userCredential.uid, {
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
    const user = await signInWithEmailAndPassword(auth, email, password);
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

    // checks authentication of token
    const decodedToken = await adminAuth.verifySessionCookie(
      sessionValue.value,
      true
    );
    if (!decodedToken) {
      return false;
    }

    const user = await adminAuth.getUser(decodedToken.uid);
    const parsed = user.toJSON();
    return { parsed, valid: true };
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
    return decodedToken.uid;
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
    return decodedToken.uid;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
