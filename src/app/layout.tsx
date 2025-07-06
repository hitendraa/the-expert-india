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
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://theexpertindia.com',
    siteName: SITE_FULL_NAME,
    title: `${SITE_FULL_NAME} - Complete Legal Solutions & Business Registration Services`,
    description: `${SITE_FULL_NAME} provides comprehensive legal services including company registration, trademark registration, GST services, licenses, and tax compliance. Trusted by 1 lakh+ clients across India.`,
    images: [
      {
        url: '/logo-dark.png',
        width: 800,
        height: 600,
        alt: SITE_FULL_NAME,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_FULL_NAME,
    description: `${SITE_FULL_NAME} provides comprehensive legal services including company registration, trademark registration, GST services, licenses, and tax compliance.`,
    images: ['/logo-dark.png'],
  }
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
