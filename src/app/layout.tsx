// import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import "animate.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navigationbar from "./components/Navbar2";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "George Reade: Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/ouroboros.jpg" />{" "}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&family=League+Spartan:wght@100;200;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body h-full">
        <Navigationbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
