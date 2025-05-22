"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Code, FileText, Layers, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InlineWidget } from "react-calendly";
import Hero from "@/components/landingPage/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/landingPage/RecentProjects";
import { Project } from "@/lib/types/landing.data.types";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <RecentProjects projects={projects} />

        <section id="certifications" className="py-20 bg-black">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
                Expertise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Certifications & Skills
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="bg-gradient-to-br from-gray-900 to-black border-gray-800"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-silver" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        {cert.title}
                      </CardTitle>
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
                        <Button
                          variant="ghost"
                          className="text-silver hover:text-white hover:bg-gray-800"
                        >
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
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
                  Why Choose Me
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Delivering Excellence in Every Project
                </h2>
                <p className="text-gray-300 mb-8">
                  With a proven track record of successful projects and
                  satisfied clients, I bring technical expertise and creative
                  problem-solving to every challenge.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {benefit.description}
                        </p>
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
                <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
                  Get in Touch
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Schedule a Meeting
                </h2>
                <p className="text-gray-300 mb-8 max-w-md">
                  Let's discuss your project requirements and how I can help
                  bring your vision to life.
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
                      <p className="text-white">
                        Monday - Friday, 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black p-6 rounded-xl border border-gray-800">
                <InlineWidget url="https://calendly.com/miguelfiguera/30min" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container text-center">
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
              Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Latest Articles
            </h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on software development, design,
              and technology.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full transition-transform hover:scale-[1.02]">
                    <div className="aspect-video relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
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
                      <CardTitle className="text-xl text-white">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-gray-700 text-silver hover:bg-gray-900"
                >
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create something exceptional that meets your
              business goals and exceeds expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button className="bg-silver hover:bg-gray-300 text-black px-8 py-6 text-lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-gray-700 text-silver hover:bg-gray-900 px-8 py-6 text-lg"
                >
                  Explore My Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Sample data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with payment processing and inventory management.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/ecommerce", // Replace with actual link
    github: "https://github.com/user/ecommerce", // Replace with actual GitHub repo
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure and intuitive mobile banking application with real-time transaction tracking.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Firebase"],
    link: "https://example.com/banking", // Replace with actual link
    github: "https://github.com/user/banking", // Replace with actual GitHub repo
  },
  {
    id: 3,
    title: "AI Content Generator",
    category: "Machine Learning",
    description:
      "Content generation tool powered by advanced AI algorithms for marketing teams.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "TensorFlow", "AWS"],
    link: "https://example.com/ai", // Replace with actual link
    github: "https://github.com/user/ai", // Replace with actual GitHub repo
  },
];

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description:
      "Expertise in designing distributed systems on AWS infrastructure.",
    date: "2023",
    link: "#",
  },
  {
    id: 2,
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    description:
      "Advanced skills in building scalable applications on Google Cloud Platform.",
    date: "2022",
    link: "#",
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    description:
      "Proficiency in developing solutions using Azure services and technologies.",
    date: "2022",
    link: "#",
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    description:
      "Expert knowledge in deploying and managing Kubernetes clusters.",
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
];

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
];

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
];
