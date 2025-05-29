import React from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogHeaderProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-12">
      <Badge className="mb-2 bg-gray-800 text-silver hover:bg-gray-800/90">
        Blog
      </Badge>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
        Insights & Articles
      </h1>
      <p className="text-gray-400 md:text-xl max-w-[700px]">
        Thoughts, tutorials, and insights on software development, design, and
        technology.
      </p>
      <div className="w-full max-w-md relative mt-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="pl-10 bg-gray-900 border-gray-800 text-white"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default BlogHeader;
