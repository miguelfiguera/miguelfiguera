import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Layout, CheckSquare, Cpu, Globe, Headphones, ArrowRight, Layers } from "lucide-react"

export default function ServicesPage() {
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
            <Link href="/services" className="text-sm font-medium text-silver transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Contact
            </Link>
                        <Link href="/services" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
              Services
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
              <Badge className="mb-2 bg-gray-800 text-silver hover:bg-gray-800/90">Professional Services</Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Expert Solutions for Your Business</h1>
              <p className="text-gray-400 md:text-xl max-w-[800px]">
                Comprehensive development and technology services to help your business thrive in the digital landscape.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 overflow-hidden h-full hover:border-silver/50 transition-colors"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-silver/10 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400">{service.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="rounded-full bg-silver/10 p-1 text-silver mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/#contact" className="text-silver hover:text-white flex items-center gap-1 text-sm">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Why Choose Me</Badge>
                <h2 className="text-3xl font-bold mb-6">Expertise That Delivers Results</h2>
                <p className="text-gray-300 mb-8">
                  With years of experience across multiple technologies and industries, I bring a comprehensive approach
                  to every project. My services are tailored to meet your specific needs and business goals.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{benefit.title}</h3>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
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
                    alt="Miguel Figuera working"
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
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Process</Badge>
              <h2 className="text-3xl font-bold mb-4">How I Work</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                My structured approach ensures that your project is delivered on time, within budget, and to the highest
                standards.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {workProcess.map((step, index) => (
                <div key={index} className="relative">
                  {index < workProcess.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-silver/30 to-transparent z-0"></div>
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-silver/10 border border-silver/30 flex items-center justify-center mb-4 text-silver font-bold text-2xl">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800"
                    >
                      <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
                        {tech.icon}
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Technologies</Badge>
                <h2 className="text-3xl font-bold mb-6">Cutting-Edge Tools & Technologies</h2>
                <p className="text-gray-300 mb-6">
                  I stay up-to-date with the latest technologies and tools to deliver modern, efficient, and scalable
                  solutions for your business.
                </p>
                <Link href="/#contact">
                  <Button className="bg-silver hover:bg-gray-300 text-black">Discuss Your Project</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that drive your business forward. Contact me today to
              discuss your project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button className="bg-silver hover:bg-gray-300 text-black px-8 py-6 text-lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-gray-700 text-silver hover:bg-gray-900 px-8 py-6 text-lg">
                  View My Work
                </Button>
              </Link>
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
              <Link href="/" className="text-sm text-gray-400 hover:text-silver">
                Home
              </Link>
              <Link href="/services" className="text-sm text-silver">
                Services
              </Link>
              <Link href="/portfolio" className="text-sm text-gray-400 hover:text-silver">
                Portfolio
              </Link>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-silver">
                Blog
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

// Sample data
const services = [
  {
    title: "Fullstack Development",
    shortDescription: "End-to-end web application development",
    description:
      "Comprehensive development services covering both frontend and backend aspects of your application, ensuring a seamless user experience and robust functionality.",
    icon: <Layers className="h-6 w-6 text-silver" />,
    features: [
      "Custom web application development",
      "API design and integration",
      "Database architecture",
      "Responsive UI/UX implementation",
      "Performance optimization",
    ],
  },
  {
    title: "Backend Development",
    shortDescription: "Robust server-side solutions",
    description:
      "Powerful backend systems built with modern technologies to handle your business logic, data processing, and API needs.",
    icon: <Server className="h-6 w-6 text-silver" />,
    features: [
      "Ruby on Rails development",
      "Express.js applications",
      "NestJS enterprise solutions",
      "RESTful and GraphQL APIs",
      "Microservices architecture",
    ],
  },
  {
    title: "Frontend Development",
    shortDescription: "Engaging user interfaces",
    description:
      "Modern, responsive, and intuitive user interfaces that provide exceptional user experiences across all devices and platforms.",
    icon: <Layout className="h-6 w-6 text-silver" />,
    features: [
      "React single-page applications",
      "Next.js for server-side rendering",
      "Tailwind CSS for modern styling",
      "Inertia.js for monolithic applications",
      "Progressive Web Apps (PWAs)",
    ],
  },
  {
    title: "QA Testing",
    shortDescription: "Comprehensive quality assurance",
    description:
      "Thorough testing methodologies to ensure your applications are bug-free, secure, and perform optimally under all conditions.",
    icon: <CheckSquare className="h-6 w-6 text-silver" />,
    features: [
      "Automated testing frameworks",
      "Manual testing procedures",
      "Performance testing",
      "Security vulnerability assessment",
      "Cross-browser and device compatibility",
    ],
  },
  {
    title: "AI & Automation",
    shortDescription: "Intelligent automation solutions",
    description:
      "Leverage the power of artificial intelligence and automation to streamline processes, reduce costs, and enhance decision-making.",
    icon: <Cpu className="h-6 w-6 text-silver" />,
    features: [
      "AI-powered business solutions",
      "Workflow automation",
      "Server automation and DevOps",
      "Machine learning integration",
      "Predictive analytics",
    ],
  },
  {
    title: "Odoo Implementation",
    shortDescription: "Enterprise resource planning",
    description:
      "Customized Odoo ERP solutions to streamline your business operations, from inventory management to customer relationships.",
    icon: <Globe className="h-6 w-6 text-silver" />,
    features: [
      "Odoo installation and configuration",
      "Custom module development",
      "Integration with existing systems",
      "User training and support",
      "Ongoing maintenance",
    ],
  },
  {
    title: "Infrastructure & Database",
    shortDescription: "Scalable technical foundations",
    description:
      "Expert design and management of your technical infrastructure and databases to ensure reliability, security, and performance.",
    icon: <Database className="h-6 w-6 text-silver" />,
    features: [
      "Cloud infrastructure setup",
      "Database design and optimization",
      "Data migration and integration",
      "Backup and disaster recovery",
      "Performance monitoring",
    ],
  },
  {
    title: "Callcenter & Cloud Solutions",
    shortDescription: "Enterprise communication systems",
    description:
      "Modern cloud-based call center and communication solutions to enhance customer service and internal collaboration.",
    icon: <Headphones className="h-6 w-6 text-silver" />,
    features: [
      "Cloud-based call center setup",
      "VoIP implementation",
      "CRM integration",
      "Call analytics and reporting",
      "Team collaboration tools",
    ],
  },
  {
    title: "Custom Development",
    shortDescription: "Tailored software solutions",
    description:
      "Bespoke software development services designed to address your unique business challenges and requirements.",
    icon: <Code className="h-6 w-6 text-silver" />,
    features: [
      "Requirements analysis",
      "Custom software architecture",
      "Agile development process",
      "Ongoing support and maintenance",
      "Scalable solutions",
    ],
  },
]

const benefits = [
  {
    title: "Technical Expertise",
    description: "Deep knowledge across multiple technologies and frameworks.",
    icon: <Code className="w-5 h-5 text-silver" />,
  },
  {
    title: "Proven Track Record",
    description: "Successful projects delivered for clients across industries.",
    icon: <CheckSquare className="w-5 h-5 text-silver" />,
  },
  {
    title: "Agile Methodology",
    description: "Flexible, iterative approach to project management.",
    icon: <Layers className="w-5 h-5 text-silver" />,
  },
  {
    title: "Ongoing Support",
    description: "Continued assistance and maintenance after project completion.",
    icon: <Headphones className="w-5 h-5 text-silver" />,
  },
]

const workProcess = [
  {
    title: "Discovery",
    description: "Understanding your business goals and project requirements.",
  },
  {
    title: "Planning",
    description: "Creating a detailed roadmap and technical architecture.",
  },
  {
    title: "Development",
    description: "Building your solution with regular updates and feedback.",
  },
  {
    title: "Delivery",
    description: "Thorough testing, deployment, and knowledge transfer.",
  },
]

const technologies = [
  { name: "React", icon: <Code className="w-5 h-5 text-silver" /> },
  { name: "Next.js", icon: <Code className="w-5 h-5 text-silver" /> },
  { name: "Ruby on Rails", icon: <Code className="w-5 h-5 text-silver" /> },
  { name: "Express.js", icon: <Code className="w-5 h-5 text-silver" /> },
  { name: "NestJS", icon: <Code className="w-5 h-5 text-silver" /> },
  { name: "Tailwind CSS", icon: <Code className="w-5 h-5 text-silver" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-silver" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5 text-silver" /> },
  { name: "AWS", icon: <Server className="w-5 h-5 text-silver" /> },
  { name: "Docker", icon: <Server className="w-5 h-5 text-silver" /> },
  { name: "Odoo", icon: <Globe className="w-5 h-5 text-silver" /> },
  { name: "AI/ML", icon: <Cpu className="w-5 h-5 text-silver" /> },
]
