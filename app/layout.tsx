import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RightSidebar } from "@/components/right-sidebar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDA Church Bugema University",
  description:
    "Official website of Bugema University Seventh-day Adventist Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        <div className="hidden md:flex">
          <RightSidebar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
