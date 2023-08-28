import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "Discord Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="discord-theme"
        >
          <body className={cn( inter.className, 'bg-white dark:bg-[#313338]')}>{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
