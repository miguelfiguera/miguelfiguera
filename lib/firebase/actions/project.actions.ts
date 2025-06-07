import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Project } from "@/lib/types/landing.data.types";
import {
  projectSchema,
  type ProjectSchema,
} from "@/lib/schemas/landing.schemas";

const COLLECTION_NAME = "projects";

export async function createProject(project: Omit<ProjectSchema, "id">) {
  try {
    const validation = projectSchema.omit({ id: true }).safeParse(project);
    if (!validation.success) {
      throw new Error("Invalid project data");
    }
    const docRef = await adminDb
      .collection(COLLECTION_NAME)
      .add(validation.data);
    return { id: parseInt(docRef.id), ...validation.data } as ProjectSchema;
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
    const validation = projectSchema.safeParse({
      id: parseInt(doc.id),
      ...data,
    });
    if (!validation.success) {
      throw new Error("Invalid project data from database");
    }
    return validation.data;
  } catch (error) {
    console.error("Error getting project:", error);
    throw error;
  }
}

export async function getAllProjects() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    const projects = snapshot.docs.map((doc) => {
      const data = doc.data();
      const validation = projectSchema.safeParse({
        id: parseInt(doc.id),
        ...data,
      });
      if (!validation.success) {
        throw new Error(`Invalid project data for document ${doc.id}`);
      }
      return validation.data;
    });
    return projects;
  } catch (error) {
    console.error("Error getting all projects:", error);
    throw error;
  }
}

export async function updateProject(
  id: string,
  project: Partial<ProjectSchema>
) {
  try {
    const validation = projectSchema.partial().safeParse(project);
    if (!validation.success) {
      throw new Error("Invalid project update data");
    }
    await adminDb.collection(COLLECTION_NAME).doc(id).update(validation.data);
    return { id: parseInt(id), ...validation.data } as ProjectSchema;
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
