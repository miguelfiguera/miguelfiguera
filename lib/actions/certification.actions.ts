import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Certification } from "@/lib/types/landing.data.types";

const COLLECTION_NAME = "certifications";

export async function createCertification(
  certification: Omit<Certification, "id">
) {
  try {
    const docRef = await adminDb.collection(COLLECTION_NAME).add(certification);
    return { id: parseInt(docRef.id), ...certification } as Certification;
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
    return { id: parseInt(doc.id), ...doc.data() } as Certification;
  } catch (error) {
    console.error("Error getting certification:", error);
    throw error;
  }
}

export async function getAllCertifications() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    return snapshot.docs.map((doc) => ({
      id: parseInt(doc.id),
      ...doc.data(),
    })) as Certification[];
  } catch (error) {
    console.error("Error getting all certifications:", error);
    throw error;
  }
}

export async function updateCertification(
  id: string,
  certification: Partial<Certification>
) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).update(certification);
    return { id: parseInt(id), ...certification } as Certification;
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
