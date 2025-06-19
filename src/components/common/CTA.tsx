"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Briefcase } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";
import "@/app/animations.css";

const ctaVariants = cva(  "relative overflow-hidden",
  {
    variants: {
      variant: {
        gradient: "bg-brand-gradient text-white",
        outline: "bg-white border-2 border-brand-primary/20 shadow-brand-lg hover:border-brand-primary/30 transition-all duration-300",
        dark: "bg-gray-900 text-white",
      },
      size: {
        default: "p-8 md:p-12",
        compact: "p-6 md:p-8",
        large: "p-8 md:p-12 lg:p-16",
      },
      rounded: {
        default: "rounded-2xl",
        large: "rounded-3xl",
        small: "rounded-xl",
      }
    },
    defaultVariants: {
      variant: "gradient",
      size: "default",
      rounded: "default",
    },
  }
);

interface CTAProps extends VariantProps<typeof ctaVariants> {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
  secondaryButtonHref?: string;
  badge?: string;
  className?: string;
}

const CTA = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  secondaryButtonHref = "/contact",
  badge,
  variant,
  size,
  rounded,
  className,
}: CTAProps) => {
  const isGradient = variant === "gradient";
  const isDark = variant === "dark";
  
  return (
    <div className={cn(ctaVariants({ variant, size, rounded }), className)}>
      {/* Background Elements for gradient variant */}
      {isGradient && (
        <>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </>
      )}

      <div className="text-center relative z-10">
        {badge && (
          <div className="flex items-center justify-center mb-4">
            <div className={cn(
              "p-3 rounded-full mr-4",
              isGradient || isDark ? "bg-white/20" : "bg-brand-primary/10"
            )}>
              <Briefcase className={cn(
                "h-6 w-6",
                isGradient || isDark ? "text-white" : "text-brand-primary"
              )} />
            </div>
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              isGradient || isDark 
                ? "bg-white/20 text-white border border-white/30" 
                : "bg-brand-primary/10 text-brand-primary border border-brand-primary/20"
            )}>
              {badge}
            </span>
          </div>
        )}

        <h3 className={cn(
          "text-2xl md:text-3xl font-bold mb-4",
          isGradient || isDark ? "text-white" : "text-gray-900"
        )}>
          {title}
        </h3>

        <p className={cn(
          "text-lg mb-6 max-w-2xl mx-auto leading-relaxed",
          isGradient ? "text-white/90" : isDark ? "text-gray-300" : "text-gray-600"
        )}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className={cn(
              "font-semibold transition-all duration-300 animated-hover animated-hover-primary",
              isGradient || isDark 
                ? "bg-white text-brand-primary hover:bg-white/95" 
                : "bg-brand-primary text-white hover:bg-brand-primary/90"
            )}
            asChild
          >
            <a href={`tel:${CONTACT_INFO.phone}`}>
              <Phone className="h-5 w-5 mr-2" />
              {primaryButton}
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>          {secondaryButton && (
            <Button 
              size="lg" 
              variant="outline" 
              className={cn(
                "font-semibold transition-all duration-300 animated-hover border-2",
                isGradient 
                  ? "border-white text-white bg-white/10 hover:bg-white hover:text-brand-primary backdrop-blur-sm"
                  : isDark
                  ? "border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-white hover:text-gray-900"
                  : "border-brand-primary/30 text-brand-primary bg-brand-primary/5 hover:bg-brand-primary hover:text-white hover:border-brand-primary"
              )}
              asChild
            >
              <Link href={secondaryButtonHref}>
                <Briefcase className="h-5 w-5 mr-2" />
                {secondaryButton}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA;
