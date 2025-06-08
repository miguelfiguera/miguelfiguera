import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import DashboardStats from "@/components/adminComponents/DashboardStats";
import ContentTabs from "@/components/adminComponents/ContentTabs";
import QuickDraftAndActivity from "@/components/adminComponents/QuickDraftAndActivity";

export default function AdminPage() {
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
            placeholder="Search..."
            className="w-full bg-gray-900 border-gray-800 pl-8 text-white"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/">
            <Button
              variant="outline"
              className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
            >
              View Site
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 overflow-auto bg-gradient-to-b from-black to-gray-900">
        <div className="container py-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400">
              Welcome back, Miguel. Here&apos;s what&apos;s happening with your
              site.
            </p>
          </div>

          <DashboardStats />
          <ContentTabs />
          <QuickDraftAndActivity />
        </div>
      </main>
    </div>
  );
}
