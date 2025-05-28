import React from "react";
import BlogCard from "../GeneralUse/BlogCard";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { BlogPost } from "@/lib/types/landing.data.types";

interface Props {
  blogPosts: Omit<BlogPost, "text">[];
}

function LatestArticles(props: Props) {
  const { blogPosts } = props;

  return (
    <section className="py-20 bg-black">
      <div className="container text-center">
        <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
          Blog
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Articles</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on software development, design, and
          technology.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} BlogPost={post} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;
