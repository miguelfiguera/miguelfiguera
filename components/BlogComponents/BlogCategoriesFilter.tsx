import React from "react";
import { Badge } from "@/components/ui/badge";

interface BlogCategoriesFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const BlogCategoriesFilter: React.FC<BlogCategoriesFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onCategorySelect(category)}
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
  );
};

export default BlogCategoriesFilter;
