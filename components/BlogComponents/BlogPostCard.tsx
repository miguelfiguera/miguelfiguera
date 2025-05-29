import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BlogPostPreview } from "@/lib/types/landing.data.types";

interface BlogPostCardProps {
  post: BlogPostPreview;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      {" "}
      {/* Consider using slug for SEO-friendly URLs */}
      <article className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden h-full transition-transform hover:scale-[1.02] flex flex-col">
        <div className="aspect-video relative w-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional: for image optimization
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-3">
            <Badge variant="outline" className="text-silver border-gray-700">
              {post.category}
            </Badge>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
          <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center text-silver mt-auto">
            {" "}
            {/* Ensure "Read more" is at the bottom */}
            <span className="text-sm font-medium">Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
