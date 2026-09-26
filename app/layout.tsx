import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MotionProvider } from "@/components/ui/MotionProvider";

const bricolage = localFont({
  variable: "--font-bricolage",
  display: "swap",
  src: [
    { path: "../public/fonts/bricolage-400.ttf", weight: "400" },
    { path: "../public/fonts/bricolage-500.ttf", weight: "500" },
    { path: "../public/fonts/bricolage-600.ttf", weight: "600" },
    { path: "../public/fonts/bricolage-700.ttf", weight: "700" },
    { path: "../public/fonts/bricolage-800.ttf", weight: "800" },
  ],
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "../public/fonts/inter-400.ttf", weight: "400" },
    { path: "../public/fonts/inter-500.ttf", weight: "500" },
    { path: "../public/fonts/inter-600.ttf", weight: "600" },
    { path: "../public/fonts/inter-700.ttf", weight: "700" },
  ],
});

export const metadata: Metadata = {
  title: "FIRSTS: Career Launch & Foundation",
  description:
    "The guided, AI-assisted path from self-awareness to career clarity. FIRSTS turns reflection into a career you actually chose.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
