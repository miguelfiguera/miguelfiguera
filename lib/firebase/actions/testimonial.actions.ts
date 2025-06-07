import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Testimonial } from "@/lib/types/landing.data.types";
import {
  testimonialSchema,
  type TestimonialSchema,
} from "@/lib/schemas/landing.schemas";

const COLLECTION_NAME = "testimonials";

export async function createTestimonial(testimonial: TestimonialSchema) {
  try {
    const validation = testimonialSchema.safeParse(testimonial);
    if (!validation.success) {
      throw new Error("Invalid testimonial data");
    }
    const docRef = await adminDb
      .collection(COLLECTION_NAME)
      .add(validation.data);
    return { id: docRef.id, ...validation.data } as TestimonialSchema;
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
    const data = doc.data();
    const validation = testimonialSchema.safeParse(data);
    if (!validation.success) {
      throw new Error("Invalid testimonial data from database");
    }
    return { id: doc.id, ...validation.data } as TestimonialSchema;
  } catch (error) {
    console.error("Error getting testimonial:", error);
    throw error;
  }
}

export async function getAllTestimonials() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    const testimonials = snapshot.docs.map((doc) => {
      const data = doc.data();
      const validation = testimonialSchema.safeParse(data);
      if (!validation.success) {
        throw new Error(`Invalid testimonial data for document ${doc.id}`);
      }
      return { id: doc.id, ...validation.data } as TestimonialSchema;
    });
    return testimonials;
  } catch (error) {
    console.error("Error getting all testimonials:", error);
    throw error;
  }
}

export async function updateTestimonial(
  id: string,
  testimonial: Partial<TestimonialSchema>
) {
  try {
    const validation = testimonialSchema.partial().safeParse(testimonial);
    if (!validation.success) {
      throw new Error("Invalid testimonial update data");
    }
    await adminDb.collection(COLLECTION_NAME).doc(id).update(validation.data);
    return { id, ...validation.data } as TestimonialSchema;
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
