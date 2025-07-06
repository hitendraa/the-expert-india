"use client";

import "@/app/animations.css";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Award,
  Building2,
  Scale,
  MessageCircle,
  TrendingUp,
  Zap,
} from "lucide-react";
import { CONTACT_INFO, HERO_SECTION } from "@/lib/constants";
import Image from "next/image";
import RegistrationDialog from "./RegistrationDialog";


const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-gradient">
      {/* Simple background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">            {/* Trust Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1 backdrop-blur-sm border border-white/30 text-sm">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                {HERO_SECTION.badge.text}
              </Badge>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 md:h-4 md:w-4 fill-yellow-300 text-yellow-300"
                  />
                ))}
                <span className="text-xs md:text-sm text-white/80 ml-1">
                  {HERO_SECTION.rating.score}
                </span>
              </div>
            </div>
            {/* Main Headline */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">{HERO_SECTION.title}</span>
              </h1>              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {HERO_SECTION.description}
              </p>
            </div>            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 max-w-lg mx-auto lg:mx-0">
              {HERO_SECTION.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 justify-center lg:justify-start"
                >
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm md:text-base text-white/90 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-brand-primary hover:bg-white/95 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-brand-lg hover:shadow-2xl transition-all duration-300 group border-0 animated-hover animated-hover-primary"
                onClick={() => setIsDialogOpen(true)}
              >
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                {HERO_SECTION.cta.primary.text}
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-brand-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all duration-300 backdrop-blur-sm hover:shadow-brand animated-hover"
                onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}`, '_blank')}
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                {HERO_SECTION.cta.whatsapp.text}
              </Button>
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 pt-2 md:pt-4">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-1.5 md:p-2 rounded-full backdrop-blur-sm">
                  <Zap className="h-3 w-3 md:h-4 md:w-4 text-yellow-300" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-semibold text-white">
                    Fast Processing
                  </div>
                  <div className="text-xs text-white/70">Average 7 days</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-1.5 md:p-2 rounded-full backdrop-blur-sm">
                  <Shield className="h-3 w-3 md:h-4 md:w-4 text-yellow-300" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-semibold text-white">
                    100% Secure
                  </div>
                  <div className="text-xs text-white/70">
                    Government approved
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center order-first lg:order-last mt-8 lg:mt-0">
            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center relative">
              {/* Main image container */}
              <div className="relative z-10">
                <Image
                  src="/images/img.png"
                  alt="Legal Professional"
                  width={1000}
                  height={1000}
                  className="drop-shadow-2xl w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Trust Section */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-base text-white/80 mb-3 md:mb-4">
            Trusted by leading companies across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm">
              <Building2 className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm">
              <Scale className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm">
              <Award className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 bg-white/10 rounded flex items-center justify-center backdrop-blur-sm">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Registration Dialog */}
      <RegistrationDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};

export default Hero;
