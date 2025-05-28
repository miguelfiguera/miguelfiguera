import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BarChart, Users, FileText, Settings, PlusCircle, Search } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="hidden md:flex w-64 flex-col border-r border-gray-800 bg-gray-950">
        <div className="flex h-14 items-center border-b border-gray-800 px-4">
          <Link href="/" className="flex items-center gap-2">
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
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white"
              >
                <BarChart className="h-4 w-4 text-silver" />
                <span>Overview</span>
              </Link>
              <Link
                href="/admin/blog"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <FileText className="h-4 w-4" />
                <span>Blog Posts</span>
              </Link>
              <Link
                href="/admin/portfolio"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <FileText className="h-4 w-4" />
                <span>Portfolio</span>
              </Link>
              <Link
                href="/admin/messages"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <Users className="h-4 w-4" />
                <span>Messages</span>
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
                <Settings className="h-4 w-4" />
                <span>General</span>
              </Link>
              <Link
                href="/admin/profile"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white"
              >
                <Users className="h-4 w-4" />
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
              placeholder="Search..."
              className="w-full bg-gray-900 border-gray-800 pl-8 text-white"
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/">
              <Button variant="outline" className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white">
                View Site
              </Button>
            </Link>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-gradient-to-b from-black to-gray-900">
          <div className="container py-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-400">Welcome back, Miguel. Here's what's happening with your site.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,532</div>
                  <p className="text-xs text-green-500">+12% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Blog Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-green-500">+2 new this month</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-green-500">+1 new this month</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-yellow-500">3 unread</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="blog">
                <div className="flex items-center justify-between">
                  <TabsList className="bg-gray-900 border border-gray-800">
                    <TabsTrigger value="blog" className="data-[state=active]:bg-silver data-[state=active]:text-black">
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
                      <CardTitle>Blog Posts</CardTitle>
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
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Title</th>
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Status</th>
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Date</th>
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Views</th>
                                  <th className="h-10 px-4 text-right font-medium text-gray-400">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {blogPosts.map((post) => (
                                  <tr
                                    key={post.id}
                                    className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                                  >
                                    <td className="p-4 align-middle">{post.title}</td>
                                    <td className="p-4 align-middle">
                                      <span className="inline-flex items-center rounded-full border border-green-500/30 px-2.5 py-0.5 text-xs font-semibold text-green-500">
                                        {post.status}
                                      </span>
                                    </td>
                                    <td className="p-4 align-middle text-gray-400">{post.date}</td>
                                    <td className="p-4 align-middle">{post.views}</td>
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
                      <CardTitle>Projects</CardTitle>
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
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Title</th>
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
                                    <td className="p-4 align-middle">{project.title}</td>
                                    <td className="p-4 align-middle">{project.category}</td>
                                    <td className="p-4 align-middle">
                                      <span className="inline-flex items-center rounded-full border border-green-500/30 px-2.5 py-0.5 text-xs font-semibold text-green-500">
                                        {project.status}
                                      </span>
                                    </td>
                                    <td className="p-4 align-middle text-gray-400">{project.date}</td>
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
                      <CardTitle>Messages</CardTitle>
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
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Name</th>
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Email</th>
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Subject</th>
                                  <th className="h-10 px-4 text-left font-medium text-gray-400">Date</th>
                                  <th className="h-10 px-4 text-right font-medium text-gray-400">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {messages.map((message) => (
                                  <tr
                                    key={message.id}
                                    className="border-b border-gray-800 transition-colors hover:bg-gray-900/50"
                                  >
                                    <td className="p-4 align-middle">{message.name}</td>
                                    <td className="p-4 align-middle">{message.email}</td>
                                    <td className="p-4 align-middle">{message.subject}</td>
                                    <td className="p-4 align-middle text-gray-400">{message.date}</td>
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

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader>
                  <CardTitle>Quick Draft</CardTitle>
                  <CardDescription className="text-gray-400">Create a new blog post draft.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Post title" className="bg-gray-900 border-gray-800 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Brief description of your post"
                        className="min-h-[100px] bg-gray-900 border-gray-800 text-white"
                      />
                    </div>
                    <Button className="bg-silver hover:bg-gray-300 text-black">Save Draft</Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-gray-950 border-gray-800">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription className="text-gray-400">Your recent actions and updates.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="mt-1 h-2 w-2 rounded-full bg-silver"></div>
                        <div>
                          <p className="text-sm">{activity.description}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
]

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
]

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
]

const activities = [
  {
    description: "Published new blog post: 'Building Scalable Web Applications'",
    time: "2 hours ago",
  },
  {
    description: "Updated portfolio project: 'E-commerce Platform'",
    time: "Yesterday at 4:30 PM",
  },
  {
    description: "Replied to message from Sarah Johnson",
    time: "Yesterday at 2:15 PM",
  },
  {
    description: "Added new project: 'Healthcare Dashboard'",
    time: "2 days ago",
  },
  {
    description: "Updated profile information",
    time: "3 days ago",
  },
]
