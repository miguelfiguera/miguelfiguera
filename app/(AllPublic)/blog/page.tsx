"use client";

import { useState, useEffect } from "react";
import { blogPosts } from "@/lib/helpers/blog.data";
import NewsletterSubscribe from "@/components/GeneralUse/NewsletterSubscribe";
import BlogPostCard from "@/components/BlogComponents/BlogPostCard";
import { BlogPostPreview } from "@/lib/types/landing.data.types";
import BlogHeader from "@/components/BlogComponents/BlogHeader";
import BlogCategoriesFilter from "@/components/BlogComponents/BlogCategoriesFilter";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredPosts, setFilteredPosts] =
    useState<BlogPostPreview[]>(blogPosts);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Get unique categories from blogPosts, including "All"
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  useEffect(() => {
    let currentPosts = blogPosts;

    // Filter by category
    if (selectedCategory !== "All") {
      currentPosts = currentPosts.filter(
        (post) => post.category === selectedCategory
      );
    }

    // Filter by search term (title or excerpt)
    if (searchTerm) {
      currentPosts = currentPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(currentPosts);
  }, [selectedCategory, searchTerm]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <BlogHeader
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />

            {/* Post Rendering */}

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            <BlogCategoriesFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />

            <NewsletterSubscribe />
          </div>
        </section>
      </main>
    </div>
  );
}
