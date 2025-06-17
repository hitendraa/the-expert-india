"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Target,
  TrendingUp,
  Heart,
  Scale,
  Building2,
  ArrowRight,
  Star,
  Briefcase,
  Globe,
  Phone,
} from "lucide-react";
import { CONTACT_INFO, ABOUT_STATS, ABOUT_VALUES, ABOUT_CONTENT } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

// Icon mapping helper
const iconMap = {
  Users,
  Shield,
  Award,
  Globe,
  Target,
  Heart,
  TrendingUp,
} as const;

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            {ABOUT_CONTENT.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            India's Most{" "}
            <span className="text-brand-gradient bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Trusted Legal
            </span>{" "}
            Services Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ABOUT_STATS.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-brand-gradient p-3 rounded-full mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-brand-primary mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              {ABOUT_CONTENT.story.title}
            </h3>
            <div className="space-y-4 text-gray-600">
              {ABOUT_CONTENT.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex items-center mt-6 space-x-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-brand-gradient rounded-full border-2 border-white flex items-center justify-center"
                  >
                    <Star className="h-3 w-3 text-white fill-current" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  {ABOUT_CONTENT.story.rating.score} Rating
                </div>
                <div className="text-xs text-gray-500">
                  {ABOUT_CONTENT.story.rating.subtitle}
                </div>
              </div>
            </div>
          </div>          <div className="relative">
            <div className="flex items-center">
              {/* Mission Content */}
              <div className="bg-brand-gradient rounded-2xl p-6 md:p-8 text-white flex-1 lg:pr-20">
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                  {ABOUT_CONTENT.mission.title}
                </h4>
                <p className="leading-relaxed mb-4 md:mb-6 opacity-90 text-sm md:text-base lg:max-w-md">
                  {ABOUT_CONTENT.mission.description}
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="font-medium text-sm md:text-base">
                    {ABOUT_CONTENT.mission.commitment}
                  </span>
                </div>
              </div>
              {/* Mission Image - Large Desktop Only */}
              <div className="hidden xl:block absolute -right-15 w-75 h-75 z-10">
                <Image
                  src="/images/mission.png"
                  alt="Our Mission"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              {ABOUT_CONTENT.values.title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {ABOUT_CONTENT.values.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_VALUES.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-brand-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>        {/* CTA Section */}
        <div className="bg-brand-gradient rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {ABOUT_CONTENT.cta.title}
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {ABOUT_CONTENT.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/95 hover:scale-105 font-semibold px-8 py-4 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              {ABOUT_CONTENT.cta.primaryButton}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-brand-primary font-semibold px-8 py-4 backdrop-blur-sm"
              asChild
            >
              <Link href="/contact">
                <Briefcase className="h-5 w-5 mr-2" />
                {ABOUT_CONTENT.cta.secondaryButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
