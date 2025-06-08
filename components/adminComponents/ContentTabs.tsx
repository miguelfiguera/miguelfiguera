import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";

// Sample data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and Node.js",
    status: "Published",
    date: "April 15, 2023",
    views: 1245,
  },
  {
    id: 2,
    title: "Implementing Authentication with JWT in Modern Applications",
    status: "Published",
    date: "March 22, 2023",
    views: 982,
  },
  {
    id: 3,
    title: "Optimizing Database Performance in High-Traffic Applications",
    status: "Published",
    date: "February 10, 2023",
    views: 756,
  },
  {
    id: 4,
    title: "The Future of Frontend Development: Trends to Watch",
    status: "Draft",
    date: "April 25, 2023",
    views: 0,
  },
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    status: "Completed",
    date: "March 15, 2023",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    status: "Completed",
    date: "January 22, 2023",
    views: 982,
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "Web Development",
    status: "In Progress",
    date: "April 10, 2023",
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    status: "Completed",
    date: "February 05, 2023",
  },
];

const messages = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    subject: "Website Redesign Project",
    date: "April 26, 2023",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    subject: "Mobile App Development Inquiry",
    date: "April 25, 2023",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    subject: "Consultation Request",
    date: "April 24, 2023",
  },
];

export default function ContentTabs() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="blog">
        <div className="flex items-center justify-between">
          <TabsList className="bg-gray-900 border border-gray-800">
            <TabsTrigger
              value="blog"
              className="data-[state=active]:bg-silver data-[state=active]:text-black"
            >
              Recent Blog Posts
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-silver data-[state=active]:text-black"
            >
              Recent Projects
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="data-[state=active]:bg-silver data-[state=active]:text-black"
            >
              Recent Messages
            </TabsTrigger>
          </TabsList>
          <div>
            <Button className="bg-silver hover:bg-gray-300 text-black">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>
        </div>

        <TabsContent value="blog" className="mt-6">
          <Card className="bg-gray-950 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Blog Posts</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your blog posts and create new content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border border-gray-800">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="border-b border-gray-800">
                        <tr className="border-b border-gray-800 transition-colors hover:bg-gray-900/50">
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Title
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Status
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Date
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Views
                          </th>
                          <th className="h-10 px-4 text-right font-medium text-gray-400">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogPosts.map((post) => (
                          <tr
                            key={post.id}
                            className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                          >
                            <td className="p-4 align-middle text-white">
                              {post.title}
                            </td>
                            <td className="p-4 align-middle">
                              <span className="inline-flex items-center rounded-full border border-green-500/30 px-2.5 py-0.5 text-xs font-semibold text-green-500">
                                {post.status}
                              </span>
                            </td>
                            <td className="p-4 align-middle text-gray-400">
                              {post.date}
                            </td>
                            <td className="p-4 align-middle text-white">
                              {post.views}
                            </td>
                            <td className="p-4 align-middle text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-silver hover:text-white hover:bg-gray-800"
                              >
                                Edit
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <Card className="bg-gray-950 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Projects</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your portfolio projects and showcase your work.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border border-gray-800">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="border-b border-gray-800">
                        <tr className="border-b border-gray-800 transition-colors hover:bg-gray-900/50">
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Title
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Category
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Status
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Date
                          </th>
                          <th className="h-10 px-4 text-right font-medium text-gray-400">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((project) => (
                          <tr
                            key={project.id}
                            className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                          >
                            <td className="p-4 align-middle text-white">
                              {project.title}
                            </td>
                            <td className="p-4 align-middle text-white">
                              {project.category}
                            </td>
                            <td className="p-4 align-middle">
                              <span className="inline-flex items-center rounded-full border border-green-500/30 px-2.5 py-0.5 text-xs font-semibold text-green-500">
                                {project.status}
                              </span>
                            </td>
                            <td className="p-4 align-middle text-gray-400">
                              {project.date}
                            </td>
                            <td className="p-4 align-middle text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-silver hover:text-white hover:bg-gray-800"
                              >
                                Edit
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="mt-6">
          <Card className="bg-gray-950 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Messages</CardTitle>
              <CardDescription className="text-gray-400">
                Manage inquiries and messages from potential clients.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border border-gray-800">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="border-b border-gray-800">
                        <tr className="border-b border-gray-800 transition-colors hover:bg-gray-900/50">
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Name
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Email
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Subject
                          </th>
                          <th className="h-10 px-4 text-left font-medium text-gray-400">
                            Date
                          </th>
                          <th className="h-10 px-4 text-right font-medium text-gray-400">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages.map((message) => (
                          <tr
                            key={message.id}
                            className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                          >
                            <td className="p-4 align-middle text-white">
                              {message.name}
                            </td>
                            <td className="p-4 align-middle text-white">
                              {message.email}
                            </td>
                            <td className="p-4 align-middle text-white">
                              {message.subject}
                            </td>
                            <td className="p-4 align-middle text-gray-400">
                              {message.date}
                            </td>
                            <td className="p-4 align-middle text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-silver hover:text-white hover:bg-gray-800"
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
