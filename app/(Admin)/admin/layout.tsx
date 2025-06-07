import type { Metadata } from "next";
import "../../(site)/globals.css";
import { ToastContainer } from "react-toastify";
import AdminNav from "@/components/AdminNav";

export const metadata: Metadata = {
  title: "Miguel Figuera",
  description: "Admin-panel",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <div className="flex min-h-screen bg-black text-white">
          <AdminNav />
          {children}
        </div>
      </body>
    </html>
  );
}
