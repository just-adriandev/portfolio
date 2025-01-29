import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Navbar } from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contacts from "@/components/contacts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdrianDev",
  description: "portfolio do desenvolvdor web full stack Adrian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar/>
          {children}
          <About/>  
          <Projects/>
          <Contacts/>
          </ThemeProvider>
        
        </body>
    </html>
  );
}
