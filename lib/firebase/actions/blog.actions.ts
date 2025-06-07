import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { BlogPost } from "@/lib/types/landing.data.types";
import {
  blogPostSchema,
  type BlogPostSchema,
} from "@/lib/schemas/landing.schemas";

const COLLECTION_NAME = "blog_posts";

// TODO: Create a composite index in Firestore for the following query:
// Collection: blog_posts
// Fields indexed: slug (Ascending)

export async function createBlogPost(blogPost: Omit<BlogPostSchema, "id">) {
  try {
    const validation = blogPostSchema.omit({ id: true }).safeParse(blogPost);
    if (!validation.success) {
      throw new Error("Invalid blog post data");
    }
    const docRef = await adminDb
      .collection(COLLECTION_NAME)
      .add(validation.data);
    return { id: parseInt(docRef.id), ...validation.data } as BlogPostSchema;
  } catch (error) {
    console.error("Error creating blog post:", error);
    throw error;
  }
}

export async function getBlogPost(id: string) {
  try {
    const doc = await adminDb.collection(COLLECTION_NAME).doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data();
    const validation = blogPostSchema.safeParse({
      id: parseInt(doc.id),
      ...data,
    });
    if (!validation.success) {
      throw new Error("Invalid blog post data from database");
    }
    return validation.data;
  } catch (error) {
    console.error("Error getting blog post:", error);
    throw error;
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const snapshot = await adminDb
      .collection(COLLECTION_NAME)
      .where("slug", "==", slug)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();
    const validation = blogPostSchema.safeParse({
      id: parseInt(doc.id),
      ...data,
    });
    if (!validation.success) {
      throw new Error("Invalid blog post data from database");
    }
    return validation.data;
  } catch (error) {
    console.error("Error getting blog post by slug:", error);
    throw error;
  }
}

export async function getAllBlogPosts() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    const posts = snapshot.docs.map((doc) => {
      const data = doc.data();
      const validation = blogPostSchema.safeParse({
        id: parseInt(doc.id),
        ...data,
      });
      if (!validation.success) {
        throw new Error(`Invalid blog post data for document ${doc.id}`);
      }
      return validation.data;
    });
    return posts;
  } catch (error) {
    console.error("Error getting all blog posts:", error);
    throw error;
  }
}

export async function updateBlogPost(
  id: string,
  blogPost: Partial<BlogPostSchema>
) {
  try {
    const validation = blogPostSchema.partial().safeParse(blogPost);
    if (!validation.success) {
      throw new Error("Invalid blog post update data");
    }
    await adminDb.collection(COLLECTION_NAME).doc(id).update(validation.data);
    return { id: parseInt(id), ...validation.data } as BlogPostSchema;
  } catch (error) {
    console.error("Error updating blog post:", error);
    throw error;
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).delete();
    return true;
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
}
