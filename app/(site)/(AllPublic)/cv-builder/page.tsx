import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Trash2, Download, ArrowLeft } from "lucide-react";

export default function CVBuilderPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-silver">MF</span>
              <span className="hidden sm:inline-block text-xl font-semibold">
                Miguel Figuera
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gradient-to-b from-black to-gray-900">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">CV Builder</h1>
            <p className="text-gray-400">
              Create a professional CV to showcase your skills and experience.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            <div>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="bg-gray-900 border border-gray-800 mb-6">
                  <TabsTrigger
                    value="personal"
                    className="data-[state=active]:bg-silver data-[state=active]:text-black"
                  >
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-silver data-[state=active]:text-black"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="data-[state=active]:bg-silver data-[state=active]:text-black"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="data-[state=active]:bg-silver data-[state=active]:text-black"
                  >
                    Skills
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal">
                  <Card className="bg-gray-950 border-gray-800">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription className="text-gray-400">
                        Add your personal details and contact information.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="bg-gray-900 border-gray-800 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="bg-gray-900 border-gray-800 text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input
                          id="title"
                          placeholder="Software Developer"
                          className="bg-gray-900 border-gray-800 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-gray-900 border-gray-800 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          className="bg-gray-900 border-gray-800 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="New York, NY"
                          className="bg-gray-900 border-gray-800 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website/Portfolio</Label>
                        <Input
                          id="website"
                          placeholder="https://example.com"
                          className="bg-gray-900 border-gray-800 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Textarea
                          id="summary"
                          placeholder="A brief summary of your professional background and goals..."
                          className="min-h-[120px] bg-gray-900 border-gray-800 text-white"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience">
                  <Card className="bg-gray-950 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Work Experience</CardTitle>
                        <CardDescription className="text-gray-400">
                          Add your work history and professional experience.
                        </CardDescription>
                      </div>
                      <Button className="bg-silver hover:bg-gray-300 text-black">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Experience
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ExperienceEntry />
                      <ExperienceEntry />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="education">
                  <Card className="bg-gray-950 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Education</CardTitle>
                        <CardDescription className="text-gray-400">
                          Add your educational background and qualifications.
                        </CardDescription>
                      </div>
                      <Button className="bg-silver hover:bg-gray-300 text-black">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Education
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <EducationEntry />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills">
                  <Card className="bg-gray-950 border-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Skills & Expertise</CardTitle>
                        <CardDescription className="text-gray-400">
                          Add your technical skills, languages, and other
                          expertise.
                        </CardDescription>
                      </div>
                      <Button className="bg-silver hover:bg-gray-300 text-black">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Skill
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Technical Skills</Label>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "JavaScript",
                              "React",
                              "Node.js",
                              "TypeScript",
                              "HTML/CSS",
                            ].map((skill) => (
                              <div
                                key={skill}
                                className="flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-sm"
                              >
                                {skill}
                                <button className="text-gray-400 hover:text-white">
                                  <Trash2 className="h-3 w-3" />
                                  <span className="sr-only">Remove</span>
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Input
                              placeholder="Add a skill..."
                              className="bg-gray-900 border-gray-800 text-white"
                            />
                            <Button className="bg-silver hover:bg-gray-300 text-black">
                              Add
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Languages</Label>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "English (Native)",
                              "Spanish (Fluent)",
                              "French (Basic)",
                            ].map((language) => (
                              <div
                                key={language}
                                className="flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-sm"
                              >
                                {language}
                                <button className="text-gray-400 hover:text-white">
                                  <Trash2 className="h-3 w-3" />
                                  <span className="sr-only">Remove</span>
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Input
                              placeholder="Add a language..."
                              className="bg-gray-900 border-gray-800 text-white"
                            />
                            <Button className="bg-silver hover:bg-gray-300 text-black">
                              Add
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Certifications</Label>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "AWS Certified Solutions Architect",
                              "Google Cloud Professional",
                            ].map((cert) => (
                              <div
                                key={cert}
                                className="flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-sm"
                              >
                                {cert}
                                <button className="text-gray-400 hover:text-white">
                                  <Trash2 className="h-3 w-3" />
                                  <span className="sr-only">Remove</span>
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Input
                              placeholder="Add a certification..."
                              className="bg-gray-900 border-gray-800 text-white"
                            />
                            <Button className="bg-silver hover:bg-gray-300 text-black">
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader>
                  <CardTitle>CV Preview</CardTitle>
                  <CardDescription className="text-gray-400">
                    Preview how your CV will look.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[8.5/11] bg-white rounded-md overflow-hidden">
                    <div className="p-6 text-black text-sm">
                      <div className="text-center mb-4">
                        <h2 className="text-xl font-bold">John Doe</h2>
                        <p>Software Developer</p>
                        <div className="text-xs mt-1 text-gray-600">
                          New York, NY • john@example.com • (555) 123-4567
                        </div>
                      </div>

                      <div className="mb-3">
                        <h3 className="text-sm font-bold border-b border-gray-300 pb-1 mb-2">
                          Professional Summary
                        </h3>
                        <p className="text-xs text-gray-700">
                          Experienced software developer with a passion for
                          creating efficient, scalable applications. Skilled in
                          JavaScript, React, and Node.js.
                        </p>
                      </div>

                      <div className="mb-3">
                        <h3 className="text-sm font-bold border-b border-gray-300 pb-1 mb-2">
                          Experience
                        </h3>
                        <div className="mb-2">
                          <div className="flex justify-between">
                            <p className="font-medium">Senior Developer</p>
                            <p className="text-xs">2020 - Present</p>
                          </div>
                          <p className="text-xs">Tech Company Inc.</p>
                          <ul className="text-xs text-gray-700 list-disc pl-4 mt-1">
                            <li>
                              Led development of company&apos;s flagship product
                            </li>
                            <li>
                              Implemented CI/CD pipeline reducing deployment
                              time by 40%
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h3 className="text-sm font-bold border-b border-gray-300 pb-1 mb-2">
                          Education
                        </h3>
                        <div>
                          <div className="flex justify-between">
                            <p className="font-medium">
                              BS in Computer Science
                            </p>
                            <p className="text-xs">2016 - 2020</p>
                          </div>
                          <p className="text-xs">University of Technology</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold border-b border-gray-300 pb-1 mb-2">
                          Skills
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            JavaScript
                          </span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            React
                          </span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            Node.js
                          </span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            TypeScript
                          </span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            HTML/CSS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Select>
                    <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800 text-white">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-800 text-white">
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="classic">Classic</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                    </SelectContent>
                  </Select>
                </CardFooter>
              </Card>

              <Card className="bg-gray-950 border-gray-800">
                <CardHeader>
                  <CardTitle>Tips for a Great CV</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-silver/10 p-1 text-silver">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span>
                        Keep it concise and relevant to the job you&apos;re
                        applying for.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-silver/10 p-1 text-silver">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span>
                        Use action verbs and quantify your achievements when
                        possible.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-silver/10 p-1 text-silver">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span>
                        Proofread carefully for spelling and grammar errors.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-silver/10 p-1 text-silver">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                      <span>Customize your CV for each job application.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-black border-t border-gray-800 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Miguel Figuera. All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="/"
                className="text-gray-400 hover:text-silver text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExperienceEntry() {
  return (
    <div className="space-y-4 p-4 border border-gray-800 rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-medium">Work Experience</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input
            id="jobTitle"
            placeholder="Senior Developer"
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Tech Company Inc."
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            placeholder="Jan 2020"
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            placeholder="Present"
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="New York, NY"
          className="bg-gray-900 border-gray-800 text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe your responsibilities and achievements..."
          className="min-h-[100px] bg-gray-900 border-gray-800 text-white"
        />
      </div>
    </div>
  );
}

function EducationEntry() {
  return (
    <div className="space-y-4 p-4 border border-gray-800 rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-medium">Education</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            placeholder="BS in Computer Science"
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="institution">Institution</Label>
          <Input
            id="institution"
            placeholder="University of Technology"
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="eduStartDate">Start Date</Label>
          <Input
            id="eduStartDate"
            placeholder="Sep 2016"
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="eduEndDate">End Date</Label>
          <Input
            id="eduEndDate"
            placeholder="Jun 2020"
            className="bg-gray-900 border-gray-800 text-white"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="eduLocation">Location</Label>
        <Input
          id="eduLocation"
          placeholder="Boston, MA"
          className="bg-gray-900 border-gray-800 text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="eduDescription">Description</Label>
        <Textarea
          id="eduDescription"
          placeholder="Describe your studies, achievements, and relevant coursework..."
          className="min-h-[100px] bg-gray-900 border-gray-800 text-white"
        />
      </div>
    </div>
  );
}
