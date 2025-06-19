"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileQuestion, Home, Search, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const popularServices = [
    { name: "Company Registration", href: "/services/company-registration" },
    { name: "Trademark Registration", href: "/services/trademark-registration" },
    { name: "GST Registration", href: "/services/gst-registration" },
    { name: "Income Tax Filing", href: "/services/income-tax-filing" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <Card className="shadow-2xl border-0 bg-white">
          <CardContent className="p-8 text-center">
            {/* 404 Icon */}
            <div className="bg-brand-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
              <FileQuestion className="h-12 w-12 text-brand-primary" />
            </div>

            {/* 404 Content */}
            <div className="mb-6">
              <Badge className="bg-red-50 text-red-600 hover:bg-red-50 mb-4">
                404 Error
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Page Not Found
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.
              </p>
            </div>

            {/* Popular Services */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 text-left">
                Looking for these services?
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {popularServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="text-left p-3 rounded-lg border border-gray-200 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-brand-primary transition-colors">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Link href="/">
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Services
                  </Button>
                </Link>

                <Link href="tel:+919876543210">
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Help Message */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Need help finding what you're looking for?{" "}
                <Link href="/contact" className="text-brand-primary font-medium hover:underline">
                  Contact our support team
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Brand Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-brand-primary">Expert Legal India</span> - 
            Complete Legal Solutions & Business Services
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Trusted by 1 Lakh+ clients across India
          </p>
        </div>
      </div>
    </div>
  );
}
