import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-silver">MF</span>
              <span className="hidden sm:inline-block text-xl font-semibold">Miguel Figuera</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Home
            </Link>
            <Link href="/#projects" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Projects
            </Link>
            <Link
              href="/#certifications"
              className="text-sm font-medium text-gray-400 hover:text-silver transition-colors"
            >
              Certifications
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Blog
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-silver transition-colors">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hidden md:block">
              <Button variant="outline" className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white">
                Admin
              </Button>
            </Link>
            <Link href="/cv-builder">
              <Button className="bg-silver hover:bg-gray-300 text-black">CV Builder</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="mb-2 bg-gray-800 text-silver hover:bg-gray-800/90">Portfolio</Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">My Work</h1>
              <p className="text-gray-400 md:text-xl max-w-[700px]">
                A showcase of my projects, designs, and development work across various industries.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
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
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => project.category === "Web Development")
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => project.category === "Mobile Development")
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => project.category === "UI/UX Design")
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Process</Badge>
                <h2 className="text-3xl font-bold mb-6">My Approach to Projects</h2>
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-silver/10 flex items-center justify-center text-silver font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-silver/20 via-silver/10 to-transparent blur-xl"></div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-800">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Development process"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 md:px-6 text-center">
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-black border-gray-800 text-left">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create something exceptional that meets your business goals and exceeds expectations.
            </p>
            <Link href="/#contact">
              <Button className="bg-silver hover:bg-gray-300 text-black px-8 py-6 text-lg">Get in Touch</Button>
            </Link>
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
              <Link href="/" className="text-sm text-gray-400 hover:text-silver">
                Home
              </Link>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-silver">
                Blog
              </Link>
              <Link href="/portfolio" className="text-sm text-silver">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-sm text-gray-400 hover:text-silver">
                Contact
              </Link>
            </nav>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Miguel Figuera. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-silver text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-silver text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full">
      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
        <CardDescription className="text-gray-400">{project.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-gray-800 text-silver">
              {tech}
            </Badge>
          ))}
        </div>
        <Link href={`/portfolio/${project.id}`}>
          <Button variant="ghost" className="text-silver hover:text-white hover:bg-gray-800">
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

// Sample data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with payment processing and inventory management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive mobile banking application with real-time transaction tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Firebase"],
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "Web Development",
    description: "Content generation tool powered by advanced AI algorithms for marketing teams.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "TensorFlow", "AWS"],
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description: "Comprehensive dashboard for healthcare providers to monitor patient data and analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with social features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Flutter", "Firebase", "Google Fit API"],
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing and management platform with virtual tours and agent scheduling.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
  },
]

const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "Understanding your business goals, target audience, and project requirements to create a strategic roadmap.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Creating wireframes and interactive prototypes to visualize the user experience before development begins.",
  },
  {
    title: "Development",
    description: "Building the solution with clean, maintainable code following industry best practices and standards.",
  },
  {
    title: "Testing & Quality Assurance",
    description: "Rigorous testing across devices and browsers to ensure a flawless user experience.",
  },
  {
    title: "Deployment & Support",
    description: "Launching your project and providing ongoing support and maintenance to ensure long-term success.",
  },
]

const testimonials = [
  {
    quote:
      "Miguel delivered our e-commerce platform ahead of schedule and exceeded our expectations in terms of functionality and design.",
    name: "Sarah Johnson",
    company: "Retail Solutions Inc.",
  },
  {
    quote:
      "Working with Miguel was a pleasure. His technical expertise and attention to detail resulted in a mobile app our users love.",
    name: "David Chen",
    company: "FinTech Innovations",
  },
  {
    quote:
      "Miguel's ability to understand our complex requirements and translate them into an intuitive user experience was impressive.",
    name: "Emily Rodriguez",
    company: "HealthTech Systems",
  },
]
