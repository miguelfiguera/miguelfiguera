import React from "react";
import { BlogPost } from "@/lib/types/landing.data.types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface Props {
  BlogPost: Omit<BlogPost, "text">;
}

function BlogCard(props: Props) {
  const { BlogPost } = props;

  return (
    <Link key={BlogPost.id} href={`/blog/${BlogPost.id}`}>
      <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full transition-transform hover:scale-[1.02]">
        <div className="aspect-video relative">
          <Image
            src={BlogPost.image || "/placeholder.svg"}
            alt={BlogPost.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="text-silver border-gray-700">
              {BlogPost.category}
            </Badge>
            <span className="text-xs text-gray-400">{BlogPost.date}</span>
          </div>
          <CardTitle className="text-xl text-white">{BlogPost.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 line-clamp-3">{BlogPost.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogCard;
