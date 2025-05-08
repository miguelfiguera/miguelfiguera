import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, PlusCircle, Trash2, Edit, Eye, ArrowLeft } from "lucide-react"

export default function AdminPortfolioPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="hidden md:flex w-64 flex-col border-r border-gray-800 bg-gray-950">
        <div className="flex h-14 items-center border-b border-gray-800 px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold text-silver">MF</span>
            <span className="font-semibold">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Dashboard</h2>
            <div className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Overview</span>
              </Link>
              <Link
                href="/admin/blog"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <span>Blog Posts</span>
              </Link>
              <Link
                href="/admin/portfolio"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-silver"
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
                <span>Portfolio</span>
              </Link>
              <Link
                href="/admin/messages"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Messages</span>
              </Link>
              <Link
                href="/admin/certifications"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Certifications</span>
              </Link>
              <Link
                href="/admin/curriculum"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Curriculum</span>
              </Link>
              <Link
                href="/admin/cover-letters"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Cover Letters</span>
              </Link>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</h2>
            <div className="space-y-1">
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>General</span>
              </Link>
              <Link
                href="/admin/profile"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Profile</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="border-t border-gray-800 p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-800"></div>
            <div>
              <p className="text-sm font-medium">Miguel Figuera</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </aside>
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
              <Button variant="outline" className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white">
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
                <p className="text-gray-400">Manage your portfolio projects and showcase your work.</p>
              </div>
              <Button className="bg-silver hover:bg-gray-300 text-black">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            <Tabs defaultValue="all">
              <div className="flex items-center justify-between mb-6">
                <TabsList className="bg-gray-900 border border-gray-800">
                  <TabsTrigger value="all" className="data-[state=active]:bg-silver data-[state=active]:text-black">
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger value="web" className="data-[state=active]:bg-silver data-[state=active]:text-black">
                    Web Development
                  </TabsTrigger>
                  <TabsTrigger value="mobile" className="data-[state=active]:bg-silver data-[state=active]:text-black">
                    Mobile Apps
                  </TabsTrigger>
                  <TabsTrigger value="design" className="data-[state=active]:bg-silver data-[state=active]:text-black">
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
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Project</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Category</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Status</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Date</th>
                              <th className="h-10 px-4 text-right font-medium text-gray-400">Actions</th>
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
                                        src={project.image || "/placeholder.svg?height=40&width=40"}
                                        alt={project.title}
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                    <span className="font-medium">{project.title}</span>
                                  </div>
                                </td>
                                <td className="p-4 align-middle">
                                  <Badge variant="outline" className="text-silver border-gray-700">
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
                                <td className="p-4 align-middle text-gray-400">{project.date}</td>
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
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Project</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Category</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Status</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Date</th>
                              <th className="h-10 px-4 text-right font-medium text-gray-400">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {projects
                              .filter((project) => project.category === "Web Development")
                              .map((project) => (
                                <tr
                                  key={project.id}
                                  className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                                >
                                  <td className="p-4 align-middle">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 rounded bg-gray-800 overflow-hidden">
                                        <Image
                                          src={project.image || "/placeholder.svg?height=40&width=40"}
                                          alt={project.title}
                                          width={40}
                                          height={40}
                                          className="h-full w-full object-cover"
                                        />
                                      </div>
                                      <span className="font-medium">{project.title}</span>
                                    </div>
                                  </td>
                                  <td className="p-4 align-middle">
                                    <Badge variant="outline" className="text-silver border-gray-700">
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
                                  <td className="p-4 align-middle text-gray-400">{project.date}</td>
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
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Project</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Category</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Status</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Date</th>
                              <th className="h-10 px-4 text-right font-medium text-gray-400">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {projects
                              .filter((project) => project.category === "Mobile Development")
                              .map((project) => (
                                <tr
                                  key={project.id}
                                  className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                                >
                                  <td className="p-4 align-middle">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 rounded bg-gray-800 overflow-hidden">
                                        <Image
                                          src={project.image || "/placeholder.svg?height=40&width=40"}
                                          alt={project.title}
                                          width={40}
                                          height={40}
                                          className="h-full w-full object-cover"
                                        />
                                      </div>
                                      <span className="font-medium">{project.title}</span>
                                    </div>
                                  </td>
                                  <td className="p-4 align-middle">
                                    <Badge variant="outline" className="text-silver border-gray-700">
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
                                  <td className="p-4 align-middle text-gray-400">{project.date}</td>
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
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Project</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Category</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Status</th>
                              <th className="h-10 px-4 text-left font-medium text-gray-400">Date</th>
                              <th className="h-10 px-4 text-right font-medium text-gray-400">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {projects
                              .filter((project) => project.category === "UI/UX Design")
                              .map((project) => (
                                <tr
                                  key={project.id}
                                  className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                                >
                                  <td className="p-4 align-middle">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 rounded bg-gray-800 overflow-hidden">
                                        <Image
                                          src={project.image || "/placeholder.svg?height=40&width=40"}
                                          alt={project.title}
                                          width={40}
                                          height={40}
                                          className="h-full w-full object-cover"
                                        />
                                      </div>
                                      <span className="font-medium">{project.title}</span>
                                    </div>
                                  </td>
                                  <td className="p-4 align-middle">
                                    <Badge variant="outline" className="text-silver border-gray-700">
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
                                  <td className="p-4 align-middle text-gray-400">{project.date}</td>
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
                    Fill in the details below to add a new project to your portfolio.
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
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-development">Mobile Development</SelectItem>
                            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
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
                            <SelectItem value="in-progress">In Progress</SelectItem>
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
                        <Input placeholder="Add a technology..." className="bg-gray-900 border-gray-800 text-white" />
                        <Button className="bg-silver hover:bg-gray-300 text-black">Add</Button>
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
                      <Button className="bg-silver hover:bg-gray-300 text-black">Add Project</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
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
]
