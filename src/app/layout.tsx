import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopNav } from "@/components/layout/TopNav";
import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Be Octopus Dashboard",
  description: "Dashboard overview page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-dashboard-bg text-dashboard-dark">
        <TopNav />
        <Sidebar />
        <main className="ml-[240px] pt-[64px] min-h-screen bg-dashboard-bg">
          {children}
        </main>
      </body>
    </html>
  );
}
