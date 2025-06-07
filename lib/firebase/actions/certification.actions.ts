import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Certification } from "@/lib/types/landing.data.types";
import {
  certificationSchema,
  type CertificationSchema,
} from "@/lib/schemas/landing.schemas";

const COLLECTION_NAME = "certifications";

export async function createCertification(
  certification: Omit<CertificationSchema, "id">
) {
  try {
    const validation = certificationSchema
      .omit({ id: true })
      .safeParse(certification);
    if (!validation.success) {
      throw new Error("Invalid certification data");
    }
    const docRef = await adminDb
      .collection(COLLECTION_NAME)
      .add(validation.data);
    return {
      id: parseInt(docRef.id),
      ...validation.data,
    } as CertificationSchema;
  } catch (error) {
    console.error("Error creating certification:", error);
    throw error;
  }
}

export async function getCertification(id: string) {
  try {
    const doc = await adminDb.collection(COLLECTION_NAME).doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data();
    const validation = certificationSchema.safeParse({
      id: parseInt(doc.id),
      ...data,
    });
    if (!validation.success) {
      throw new Error("Invalid certification data from database");
    }
    return validation.data;
  } catch (error) {
    console.error("Error getting certification:", error);
    throw error;
  }
}

export async function getAllCertifications() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    const certifications = snapshot.docs.map((doc) => {
      const data = doc.data();
      const validation = certificationSchema.safeParse({
        id: parseInt(doc.id),
        ...data,
      });
      if (!validation.success) {
        throw new Error(`Invalid certification data for document ${doc.id}`);
      }
      return validation.data;
    });
    return certifications;
  } catch (error) {
    console.error("Error getting all certifications:", error);
    throw error;
  }
}

export async function updateCertification(
  id: string,
  certification: Partial<CertificationSchema>
) {
  try {
    const validation = certificationSchema.partial().safeParse(certification);
    if (!validation.success) {
      throw new Error("Invalid certification update data");
    }
    await adminDb.collection(COLLECTION_NAME).doc(id).update(validation.data);
    return { id: parseInt(id), ...validation.data } as CertificationSchema;
  } catch (error) {
    console.error("Error updating certification:", error);
    throw error;
  }
}

export async function deleteCertification(id: string) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).delete();
    return true;
  } catch (error) {
    console.error("Error deleting certification:", error);
    throw error;
  }
}
