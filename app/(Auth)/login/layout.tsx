import type { Metadata } from "next";
import "@/app/(site)/globals.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Miguel Figuera",
  description: "Login.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
