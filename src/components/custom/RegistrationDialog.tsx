"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, Award, Zap } from "lucide-react";
import Image from "next/image";

interface RegistrationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationDialog = ({ isOpen, onClose }: RegistrationDialogProps) => {
  const handleGoogleSignIn = () => {
    // Implement Google Sign-in logic here
    // For now, just redirect to a registration page or implement auth
    console.log("Google Sign-in clicked");
    // You can add your Google OAuth implementation here
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          {/* Logo */}
          <div className="mx-auto mb-4">
            <Image
              src="/logo-dark.png"
              alt="The Expert India"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
            Start Your Registration
          </DialogTitle>
          <p className="text-gray-600 mt-2 text-center">
            Sign in with Google to begin your company registration process
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="bg-green-100 p-2 rounded-full w-10 h-10 mx-auto mb-2">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-xs font-medium text-green-800">Fast Process</div>
              <div className="text-xs text-green-600">7-15 days</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-full w-10 h-10 mx-auto mb-2">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-xs font-medium text-blue-800">100% Secure</div>
              <div className="text-xs text-blue-600">Protected</div>
            </div>
          </div>

          {/* Google Sign-in Button */}
          <Button
            onClick={handleGoogleSignIn}
            className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold py-3 text-base transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-1">
              <Award className="h-4 w-4 text-brand-primary" />
              <span className="text-xs text-gray-600">Trusted by 50,000+</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-xs text-gray-600">Secure & Protected</span>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500 mb-3">
              Prefer to talk to an expert first?
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                onClick={() => window.open(`tel:+917023314773`, '_blank')}
              >
                Call Now
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                onClick={() => window.open(`https://wa.me/917023314773?text=Hi, I want to start company registration`, '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
