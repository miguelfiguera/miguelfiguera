import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Project } from "@/lib/types/landing.data.types";

const COLLECTION_NAME = "projects";

export async function createProject(project: Omit<Project, "id">) {
  try {
    const docRef = await adminDb.collection(COLLECTION_NAME).add(project);
    return { id: parseInt(docRef.id), ...project } as Project;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

export async function getProject(id: string) {
  try {
    const doc = await adminDb.collection(COLLECTION_NAME).doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data();
    return { id: parseInt(doc.id), ...data } as Project;
  } catch (error) {
    console.error("Error getting project:", error);
    throw error;
  }
}

export async function getAllProjects() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: parseInt(doc.id), ...data } as Project;
    });
  } catch (error) {
    console.error("Error getting all projects:", error);
    throw error;
  }
}

export async function updateProject(id: string, project: Partial<Project>) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).update(project);
    return { id: parseInt(id), ...project } as Project;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

export async function deleteProject(id: string) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).delete();
    return true;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
