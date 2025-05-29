import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
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
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden h-full transition-transform hover:scale-[1.02]">
                    <div className="aspect-video relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <Badge
                          variant="outline"
                          className="text-silver border-gray-700"
                        >
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-400">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-white">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-silver">
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
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Categories</h2>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gray-800 text-silver hover:bg-gray-700 px-4 py-2 text-sm">
                  All
                </Badge>
                <Badge className="bg-gray-900 text-silver hover:bg-gray-800 px-4 py-2 text-sm">
                  Web Development
                </Badge>
                <Badge className="bg-gray-900 text-silver hover:bg-gray-800 px-4 py-2 text-sm">
                  Mobile Development
                </Badge>
                <Badge className="bg-gray-900 text-silver hover:bg-gray-800 px-4 py-2 text-sm">
                  UI/UX Design
                </Badge>
                <Badge className="bg-gray-900 text-silver hover:bg-gray-800 px-4 py-2 text-sm">
                  DevOps
                </Badge>
                <Badge className="bg-gray-900 text-silver hover:bg-gray-800 px-4 py-2 text-sm">
                  Security
                </Badge>
                <Badge className="bg-gray-900 text-silver hover:bg-gray-800 px-4 py-2 text-sm">
                  Database
                </Badge>
                <Badge className="bg-gray-900 text-silver hover:bg-gray-800 px-4 py-2 text-sm">
                  Machine Learning
                </Badge>
              </div>
            </div>

            <div className="mt-20 bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">
                    Subscribe to the Newsletter
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Get the latest articles, tutorials, and updates delivered
                    straight to your inbox.
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-black border-gray-800 text-white"
                    />
                    <Button className="bg-silver hover:bg-gray-300 text-black">
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Newsletter"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-2xl font-bold text-silver">MF</span>
              <span className="text-xl font-semibold">Miguel Figuera</span>
            </div>
            <nav className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-silver"
              >
                Home
              </Link>
              <Link href="/blog" className="text-sm text-silver">
                Blog
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-gray-400 hover:text-silver"
              >
                Portfolio
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-gray-400 hover:text-silver"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Miguel Figuera. All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-silver text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-silver text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sample data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and Node.js",
    slug: "building-scalable-web-applications",
    excerpt:
      "Learn how to architect and implement scalable web applications using React and Node.js with best practices for performance and maintainability.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web Development",
    date: "April 15, 2023",
  },
  {
    id: 2,
    title: "Implementing Authentication with JWT in Modern Applications",
    slug: "implementing-authentication-jwt",
    excerpt:
      "A comprehensive guide to implementing secure authentication using JSON Web Tokens in modern web and mobile applications.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Security",
    date: "March 22, 2023",
  },
  {
    id: 3,
    title: "Optimizing Database Performance in High-Traffic Applications",
    slug: "optimizing-database-performance",
    excerpt:
      "Strategies and techniques for optimizing database performance to handle high traffic loads without compromising user experience.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Database",
    date: "February 10, 2023",
  },
  {
    id: 4,
    title: "The Future of Frontend Development: Trends to Watch",
    slug: "future-of-frontend-development",
    excerpt:
      "Exploring emerging trends and technologies that are shaping the future of frontend development and user experience design.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web Development",
    date: "January 28, 2023",
  },
  {
    id: 5,
    title: "Building Cross-Platform Mobile Apps with React Native",
    slug: "cross-platform-mobile-apps-react-native",
    excerpt:
      "A practical guide to developing cross-platform mobile applications using React Native that deliver native-like performance and user experience.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Mobile Development",
    date: "December 15, 2022",
  },
  {
    id: 6,
    title: "Implementing CI/CD Pipelines for Modern Web Applications",
    slug: "implementing-cicd-pipelines",
    excerpt:
      "Step-by-step guide to setting up continuous integration and continuous deployment pipelines for modern web applications.",
    image: "/placeholder.svg?height=300&width=500",
    category: "DevOps",
    date: "November 10, 2022",
  },
];
