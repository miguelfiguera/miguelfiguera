import { z } from "zod";

// Schema for Claims
export const claimsSchema = z.object({
  admin: z.boolean().optional(),
  editor: z.boolean().optional(),
  // Add any other custom claims here
});

// Schema for User Data
export const userDataSchema = z.object({
  uid: z.string(),
  email: z.string().email(),
  emailVerified: z.boolean(),
  displayName: z.string().nullable(),
  photoURL: z.string().nullable(),
  disabled: z.boolean(),
  customClaims: claimsSchema.nullable(),
  metadata: z.object({
    creationTime: z.string(),
    lastSignInTime: z.string().nullable(),
  }),
});

// Schema for Login Credentials
export const loginCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Schema for Admin Creation
export const adminCreationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Schema for Claims Update
export const claimsUpdateSchema = z.object({
  uid: z.string(),
  claims: claimsSchema,
});

// Schema for Security Check Response
export const securityCheckResponseSchema = z.object({
  parsed: userDataSchema,
  valid: z.literal(true),
});

// Export types
export type ClaimsSchema = z.infer<typeof claimsSchema>;
export type UserDataSchema = z.infer<typeof userDataSchema>;
export type LoginCredentialsSchema = z.infer<typeof loginCredentialsSchema>;
export type AdminCreationSchema = z.infer<typeof adminCreationSchema>;
export type ClaimsUpdateSchema = z.infer<typeof claimsUpdateSchema>;
export type SecurityCheckResponseSchema = z.infer<
  typeof securityCheckResponseSchema
>;
