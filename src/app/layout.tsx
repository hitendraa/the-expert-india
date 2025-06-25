import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";
import { SITE_FULL_NAME } from "@/lib/constants";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import { AuthSync } from "@/components/auth/AuthSync";
import { AuthToast } from "@/components/auth/AuthToast";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { Toaster } from "sonner";
import { Suspense } from "react";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: `${SITE_FULL_NAME} - Complete Legal Solutions & Business Registration Services`,
  description: `${SITE_FULL_NAME} provides comprehensive legal services including company registration, trademark registration, GST services, licenses, and tax compliance. Trusted by 1 lakh+ clients across India.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      <body className={`${tinos.className} antialiased`}>        <NextAuthProvider>
          <AuthSync />
          <Suspense fallback={null}>
            <AuthToast />
          </Suspense>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <Toaster position="top-right" richColors />
        </NextAuthProvider>
      </body>
    </html>
  );
}
