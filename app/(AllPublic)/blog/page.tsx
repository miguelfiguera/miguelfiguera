"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { blogPosts } from "@/lib/helpers/blog.data";
import NewsletterSubscribe from "@/components/GeneralUse/NewsletterSubscribe";
import BlogPostCard from "@/components/BlogComponents/BlogPostCard";
import { BlogPostPreview } from "@/lib/types/landing.data.types";

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
            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2 bg-gray-800 text-silver hover:bg-gray-800/90">
                Blog
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Insights & Articles
              </h1>
              <p className="text-gray-400 md:text-xl max-w-[700px]">
                Thoughts, tutorials, and insights on software development,
                design, and technology.
              </p>
              <div className="w-full max-w-md relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 bg-gray-900 border-gray-800 text-white"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            {/* Post Rendering */}

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* categories */}

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => handleCategorySelect(category)}
                    className={`cursor-pointer px-4 py-2 text-sm transition-colors
                      ${
                        selectedCategory === category
                          ? "bg-silver text-black hover:bg-silver/90"
                          : "bg-gray-900 text-silver hover:bg-gray-800 border-gray-700"
                      }`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <NewsletterSubscribe />
          </div>
        </section>
      </main>
    </div>
  );
}
