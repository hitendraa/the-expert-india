"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";
import Link from "next/link";
import { SITE_FULL_NAME } from "@/lib/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // ...removed debug log...
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="shadow-2xl border-0 bg-white">
          <CardContent className="p-8 text-center">
            {/* Error Icon */}
            <div className="bg-red-50 p-4 rounded-full w-fit mx-auto mb-6">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>

            {/* Error Content */}
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We encountered an unexpected error while loading this page. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === "development" && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <p className="text-xs font-medium text-gray-700 mb-2">Error Details:</p>
                <p className="text-xs text-red-600 font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={reset}
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Button>
                </Link>

                <Link href="tel:+917023314773">
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support
                  </Button>
                </Link>
              </div>
            </div>

            {/* Support Message */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                If this problem persists, please contact our support team at{" "}
                <span className="text-brand-primary font-medium">support@theexpertindia.com</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Brand Footer */}        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-brand-primary">{SITE_FULL_NAME}</span> - 
            Your Trusted Legal Partner
          </p>
        </div>
      </div>
    </div>
  );
}
