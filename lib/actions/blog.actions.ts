import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { BlogPost } from "@/lib/types/landing.data.types";

const COLLECTION_NAME = "blog_posts";

// TODO: Create a composite index in Firestore for the following query:
// Collection: blog_posts
// Fields indexed: slug (Ascending)

export async function createBlogPost(blogPost: Omit<BlogPost, "id">) {
  try {
    const docRef = await adminDb.collection(COLLECTION_NAME).add(blogPost);
    return { id: parseInt(docRef.id), ...blogPost } as BlogPost;
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
    return { id: parseInt(doc.id), ...doc.data() } as BlogPost;
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
    return { id: parseInt(doc.id), ...doc.data() } as BlogPost;
  } catch (error) {
    console.error("Error getting blog post by slug:", error);
    throw error;
  }
}

export async function getAllBlogPosts() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();
    return snapshot.docs.map((doc) => ({
      id: parseInt(doc.id),
      ...doc.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error("Error getting all blog posts:", error);
    throw error;
  }
}

export async function updateBlogPost(id: string, blogPost: Partial<BlogPost>) {
  try {
    await adminDb.collection(COLLECTION_NAME).doc(id).update(blogPost);
    return { id: parseInt(id), ...blogPost } as BlogPost;
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
