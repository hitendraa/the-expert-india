import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"]
})


export const metadata: Metadata = {
  title: "Expert Legal India - Complete Legal Solutions & Business Registration Services",
  description: "Expert Legal India provides comprehensive legal services including company registration, trademark registration, GST services, licenses, and tax compliance. Trusted by 1 lakh+ clients across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tinos.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
