"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Code, FileText, Layers, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Home() {
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
            <Link href="/portfolio" className="text-sm font-medium text-gray-400 hover:text-silver transition-colors">
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
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-gray-900"></div>
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <Badge className="bg-silver text-black hover:bg-silver/90">Software Developer</Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Miguel <span className="text-silver">Figuera</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-md">
                  Crafting exceptional digital experiences with clean code and innovative solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/#contact">
                    <Button className="bg-silver hover:bg-gray-300 text-black">Schedule a Meeting</Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="outline" className="border-gray-700 text-silver hover:bg-gray-900">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-silver/20 to-transparent"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Miguel Figuera"
                  width={400}
                  height={400}
                  className="rounded-full border-2 border-silver/30 p-1"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Featured Work</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
              </div>
              <Link href="/portfolio">
                <Button variant="link" className="text-silver hover:text-white p-0">
                  View All Projects →
                </Button>
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
                    <div className="flex gap-2">
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
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 bg-black">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Certifications & Skills</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <Card key={cert.id} className="bg-gradient-to-br from-gray-900 to-black border-gray-800">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-silver" />
                      </div>
                      <CardTitle className="text-lg text-white">{cert.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{cert.issuer}</p>
                    <p className="text-gray-300">{cert.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
                    <p className="text-sm text-gray-400">{cert.date}</p>
                    {cert.link && (
                      <Link href={cert.link}>
                        <Button variant="ghost" className="text-silver hover:text-white hover:bg-gray-800">
                          Verify
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Why Choose Me</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering Excellence in Every Project</h2>
                <p className="text-gray-300 mb-8">
                  With a proven track record of successful projects and satisfied clients, I bring technical expertise
                  and creative problem-solving to every challenge.
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

        <section id="contact" className="py-20 bg-gray-900">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Get in Touch</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule a Meeting</h2>
                <p className="text-gray-300 mb-8 max-w-md">
                  Let's discuss your project requirements and how I can help bring your vision to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-silver" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">contact@miguelfiguera.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-silver" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Availability</p>
                      <p className="text-white">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-medium mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-400">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-400">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-400">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full bg-silver hover:bg-gray-300 text-black">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container text-center">
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">Blog</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Articles</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on software development, design, and technology.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full transition-transform hover:scale-[1.02]">
                    <div className="aspect-video relative">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline" className="text-silver border-gray-700">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/blog">
                <Button variant="outline" className="border-gray-700 text-silver hover:bg-gray-900">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create something exceptional that meets your business goals and exceeds expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button className="bg-silver hover:bg-gray-300 text-black px-8 py-6 text-lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-gray-700 text-silver hover:bg-gray-900 px-8 py-6 text-lg">
                  Explore My Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-silver">MF</span>
                <span className="text-xl font-semibold">Miguel Figuera</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Software developer specializing in creating exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-silver">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-silver">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-silver">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-silver">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm7 7h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-6h2v1.2c.5-.8 1.6-1.4 2.5-1.4 1.6 0 2.5 1.1 2.5 2.7v3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-silver">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-gray-400 hover:text-silver">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-400 hover:text-silver">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-silver">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/cv-builder" className="text-gray-400 hover:text-silver">
                    CV Builder
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-silver">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-silver">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-silver">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-silver">
                    Technical Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-silver">
                    Code Review
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to receive updates on new projects and articles.</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
                />
                <Button className="w-full bg-silver hover:bg-gray-300 text-black">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="text-white hover:bg-gray-900" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-gray-900 p-6 shadow-xl">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="space-y-6">
              <Link
                href="/"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#projects"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/#certifications"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </Link>
              <Link
                href="/blog"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/portfolio"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/#contact"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/admin"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
              <Link
                href="/cv-builder"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                CV Builder
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
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
    category: "Machine Learning",
    description: "Content generation tool powered by advanced AI algorithms for marketing teams.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "TensorFlow", "AWS"],
  },
]

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Expertise in designing distributed systems on AWS infrastructure.",
    date: "2023",
    link: "#",
  },
  {
    id: 2,
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    description: "Advanced skills in building scalable applications on Google Cloud Platform.",
    date: "2022",
    link: "#",
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    description: "Proficiency in developing solutions using Azure services and technologies.",
    date: "2022",
    link: "#",
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    description: "Expert knowledge in deploying and managing Kubernetes clusters.",
    date: "2021",
    link: "#",
  },
  {
    id: 5,
    title: "React Advanced Certification",
    issuer: "Meta",
    description: "Advanced techniques for building complex React applications.",
    date: "2021",
    link: "#",
  },
  {
    id: 6,
    title: "Full Stack Web Development",
    issuer: "Udacity",
    description: "Comprehensive training in modern full-stack web development.",
    date: "2020",
    link: "#",
  },
]

const benefits = [
  {
    title: "Clean, Maintainable Code",
    description: "Well-structured code that's easy to maintain and extend.",
    icon: <Code className="w-5 h-5 text-silver" />,
  },
  {
    title: "Scalable Architecture",
    description: "Solutions designed to grow with your business needs.",
    icon: <Layers className="w-5 h-5 text-silver" />,
  },
  {
    title: "Responsive Design",
    description: "Applications that work flawlessly on all devices.",
    icon: <Layers className="w-5 h-5 text-silver" />,
  },
  {
    title: "Performance Optimization",
    description: "Fast-loading applications with optimized performance.",
    icon: <Layers className="w-5 h-5 text-silver" />,
  },
]

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
]
