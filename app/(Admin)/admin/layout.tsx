import type { Metadata } from "next";
import "../../(site)/globals.css";
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
      <body>{children}</body>
    </html>
  );
}
