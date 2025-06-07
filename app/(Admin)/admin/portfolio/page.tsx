import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, PlusCircle, Trash2, Edit, Eye, ArrowLeft } from "lucide-react";

export default function AdminPortfolioPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-gray-800 bg-gray-950 px-4 sm:px-6">
        <button className="inline-flex md:hidden items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="relative flex-1 md:grow-0 md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="w-full bg-gray-900 border-gray-800 pl-8 text-white"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/">
            <Button
              variant="outline"
              className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Site
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 overflow-auto bg-gradient-to-b from-black to-gray-900">
        <div className="container py-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Portfolio Projects</h1>
              <p className="text-gray-400">
                Manage your portfolio projects and showcase your work.
              </p>
            </div>
            <Button className="bg-silver hover:bg-gray-300 text-black">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>

          <Tabs defaultValue="all">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-gray-900 border border-gray-800">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-silver data-[state=active]:text-black"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-silver data-[state=active]:text-black"
                >
                  Web Development
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-silver data-[state=active]:text-black"
                >
                  Mobile Apps
                </TabsTrigger>
                <TabsTrigger
                  value="design"
                  className="data-[state=active]:bg-silver data-[state=active]:text-black"
                >
                  UI/UX Design
                </TabsTrigger>
              </TabsList>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800 text-white">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="all">
              <Card className="bg-gray-950 border-gray-800">
                <CardContent className="p-0">
                  <div className="rounded-md border border-gray-800">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="border-b border-gray-800">
                          <tr className="border-b border-gray-800 transition-colors hover:bg-gray-900/50">
                            <th className="h-10 px-4 text-left font-medium text-gray-400">
                              Project
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
                              <td className="p-4 align-middle">
                                <div className="flex items-center gap-3">
                                  <div className="h-10 w-10 rounded bg-gray-800 overflow-hidden">
                                    <Image
                                      src={
                                        project.image ||
                                        "/placeholder.svg?height=40&width=40"
                                      }
                                      alt={project.title}
                                      width={40}
                                      height={40}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <span className="font-medium">
                                    {project.title}
                                  </span>
                                </div>
                              </td>
                              <td className="p-4 align-middle">
                                <Badge
                                  variant="outline"
                                  className="text-silver border-gray-700"
                                >
                                  {project.category}
                                </Badge>
                              </td>
                              <td className="p-4 align-middle">
                                <span
                                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                                    project.status === "Completed"
                                      ? "border-green-500/30 text-green-500"
                                      : "border-blue-500/30 text-blue-500"
                                  }`}
                                >
                                  {project.status}
                                </span>
                              </td>
                              <td className="p-4 align-middle text-gray-400">
                                {project.date}
                              </td>
                              <td className="p-4 align-middle text-right">
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                  >
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View</span>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                  >
                                    <Edit className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Delete</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="web">
              <Card className="bg-gray-950 border-gray-800">
                <CardContent className="p-0">
                  <div className="rounded-md border border-gray-800">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="border-b border-gray-800">
                          <tr className="border-b border-gray-800 transition-colors hover:bg-gray-900/50">
                            <th className="h-10 px-4 text-left font-medium text-gray-400">
                              Project
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
                          {projects
                            .filter(
                              (project) =>
                                project.category === "Web Development"
                            )
                            .map((project) => (
                              <tr
                                key={project.id}
                                className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                              >
                                <td className="p-4 align-middle">
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded bg-gray-800 overflow-hidden">
                                      <Image
                                        src={
                                          project.image ||
                                          "/placeholder.svg?height=40&width=40"
                                        }
                                        alt={project.title}
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <span className="font-medium">
                                      {project.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="p-4 align-middle">
                                  <Badge
                                    variant="outline"
                                    className="text-silver border-gray-700"
                                  >
                                    {project.category}
                                  </Badge>
                                </td>
                                <td className="p-4 align-middle">
                                  <span
                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                                      project.status === "Completed"
                                        ? "border-green-500/30 text-green-500"
                                        : "border-blue-500/30 text-blue-500"
                                    }`}
                                  >
                                    {project.status}
                                  </span>
                                </td>
                                <td className="p-4 align-middle text-gray-400">
                                  {project.date}
                                </td>
                                <td className="p-4 align-middle text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Eye className="h-4 w-4" />
                                      <span className="sr-only">View</span>
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Edit className="h-4 w-4" />
                                      <span className="sr-only">Edit</span>
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                      <span className="sr-only">Delete</span>
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile">
              <Card className="bg-gray-950 border-gray-800">
                <CardContent className="p-0">
                  <div className="rounded-md border border-gray-800">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="border-b border-gray-800">
                          <tr className="border-b border-gray-800 transition-colors hover:bg-gray-900/50">
                            <th className="h-10 px-4 text-left font-medium text-gray-400">
                              Project
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
                          {projects
                            .filter(
                              (project) =>
                                project.category === "Mobile Development"
                            )
                            .map((project) => (
                              <tr
                                key={project.id}
                                className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                              >
                                <td className="p-4 align-middle">
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded bg-gray-800 overflow-hidden">
                                      <Image
                                        src={
                                          project.image ||
                                          "/placeholder.svg?height=40&width=40"
                                        }
                                        alt={project.title}
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <span className="font-medium">
                                      {project.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="p-4 align-middle">
                                  <Badge
                                    variant="outline"
                                    className="text-silver border-gray-700"
                                  >
                                    {project.category}
                                  </Badge>
                                </td>
                                <td className="p-4 align-middle">
                                  <span
                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                                      project.status === "Completed"
                                        ? "border-green-500/30 text-green-500"
                                        : "border-blue-500/30 text-blue-500"
                                    }`}
                                  >
                                    {project.status}
                                  </span>
                                </td>
                                <td className="p-4 align-middle text-gray-400">
                                  {project.date}
                                </td>
                                <td className="p-4 align-middle text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Eye className="h-4 w-4" />
                                      <span className="sr-only">View</span>
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Edit className="h-4 w-4" />
                                      <span className="sr-only">Edit</span>
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                      <span className="sr-only">Delete</span>
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="design">
              <Card className="bg-gray-950 border-gray-800">
                <CardContent className="p-0">
                  <div className="rounded-md border border-gray-800">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="border-b border-gray-800">
                          <tr className="border-b border-gray-800 transition-colors hover:bg-gray-900/50">
                            <th className="h-10 px-4 text-left font-medium text-gray-400">
                              Project
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
                          {projects
                            .filter(
                              (project) => project.category === "UI/UX Design"
                            )
                            .map((project) => (
                              <tr
                                key={project.id}
                                className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                              >
                                <td className="p-4 align-middle">
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded bg-gray-800 overflow-hidden">
                                      <Image
                                        src={
                                          project.image ||
                                          "/placeholder.svg?height=40&width=40"
                                        }
                                        alt={project.title}
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <span className="font-medium">
                                      {project.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="p-4 align-middle">
                                  <Badge
                                    variant="outline"
                                    className="text-silver border-gray-700"
                                  >
                                    {project.category}
                                  </Badge>
                                </td>
                                <td className="p-4 align-middle">
                                  <span
                                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                                      project.status === "Completed"
                                        ? "border-green-500/30 text-green-500"
                                        : "border-blue-500/30 text-blue-500"
                                    }`}
                                  >
                                    {project.status}
                                  </span>
                                </td>
                                <td className="p-4 align-middle text-gray-400">
                                  {project.date}
                                </td>
                                <td className="p-4 align-middle text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Eye className="h-4 w-4" />
                                      <span className="sr-only">View</span>
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Edit className="h-4 w-4" />
                                      <span className="sr-only">Edit</span>
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                      <span className="sr-only">Delete</span>
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle>Add New Project</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill in the details below to add a new project to your
                  portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      placeholder="Project title"
                      className="bg-gray-900 border-gray-800 text-white"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800 text-white">
                          <SelectItem value="web-development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="mobile-development">
                            Mobile Development
                          </SelectItem>
                          <SelectItem value="ui-ux-design">
                            UI/UX Design
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800 text-white">
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="in-progress">
                            In Progress
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project..."
                      className="min-h-[120px] bg-gray-900 border-gray-800 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Technologies Used</Label>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "MongoDB"].map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-sm"
                        >
                          {tech}
                          <button className="text-gray-400 hover:text-white">
                            <Trash2 className="h-3 w-3" />
                            <span className="sr-only">Remove</span>
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Input
                        placeholder="Add a technology..."
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <Button className="bg-silver hover:bg-gray-300 text-black">
                        Add
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectUrl">Project URL</Label>
                    <Input
                      id="projectUrl"
                      placeholder="https://example.com"
                      className="bg-gray-900 border-gray-800 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Project Image</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-24 w-24 rounded border border-gray-800 bg-gray-900 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <Button
                        variant="outline"
                        className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
                      >
                        Upload Image
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button
                      variant="outline"
                      className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
                    >
                      Cancel
                    </Button>
                    <Button className="bg-silver hover:bg-gray-300 text-black">
                      Add Project
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// Sample data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    status: "Completed",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    status: "Completed",
    date: "January 22, 2023",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "Web Development",
    status: "In Progress",
    date: "April 10, 2023",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    status: "Completed",
    date: "February 05, 2023",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    status: "In Progress",
    date: "April 18, 2023",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web Development",
    status: "Completed",
    date: "March 01, 2023",
    image: "/placeholder.svg?height=40&width=40",
  },
];
