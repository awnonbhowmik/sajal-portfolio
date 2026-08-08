import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sajalchakroborty.github.io"),
  title: {
    default: "Sajal Chakroborty — Mathematical Sciences & Machine Learning",
    template: "%s — Sajal Chakroborty",
  },
  description:
    "Academic portfolio of Sajal Chakroborty, Postdoctoral Scholar in Mathematical Sciences at Worcester Polytechnic Institute.",
  openGraph: {
    title: "Sajal Chakroborty",
    description: "Mathematical sciences, statistical machine learning, and data science.",
    type: "website",
    images: ["/images/sajal-chakroborty.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-paper">
        <div className="site-grid pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
