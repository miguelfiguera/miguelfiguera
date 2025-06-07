import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Testimonial } from "@/lib/types/landing.data.types";

const COLLECTION_NAME = "testimonials";

export async function createTestimonial(testimonial: Testimonial) {
  try {
    const docRef = await adminDb.collection(COLLECTION_NAME).add(testimonial);
    return { id: docRef.id, ...testimonial };
  } catch (error) {
    console.error("Error creating testimonial:", error);
    throw error;
  }
}

export async function getTestimonial(id: string) {
  try {
    const doc = await adminDb.collection(COLLECTION_NAME).doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data() as Omit<Testimonial, "id">;
    return { id: doc.id, ...data } as Testimonial;
  } catch (error) {
    console.error("Error getting testimonial:", error);
    throw error;
  }
}

export async function getAllTestimonials() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    return snapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Testimonial, "id">;
      return { id: doc.id, ...data } as Testimonial;
    });
  } catch (error) {
    console.error("Error getting all testimonials:", error);
    throw error;
  }
}

export async function updateTestimonial(
  id: string,
  testimonial: Partial<Testimonial>
) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).update(testimonial);
    return { id, ...testimonial } as Testimonial;
  } catch (error) {
    console.error("Error updating testimonial:", error);
    throw error;
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).delete();
    return true;
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    throw error;
  }
}
