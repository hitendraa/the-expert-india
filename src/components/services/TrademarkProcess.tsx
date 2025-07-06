"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Clock,
  Users,
  Search,
  FileText,
  FileSearch,
  Award
} from "lucide-react";
import { TRADEMARK_PROCESS } from "@/lib/services-constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

const iconMap = {
  Search,
  FileText,
  FileSearch,
  Award
};

const TrademarkProcess = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Award className="h-4 w-4 mr-2" />
            Registration Process
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {TRADEMARK_PROCESS.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {TRADEMARK_PROCESS.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {TRADEMARK_PROCESS.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            
            return (
              <div key={index} className="relative">
                <Card className="animated-hover shadow-md border-0 h-full">
                  <CardContent className="p-4 text-center">
                    {/* Step Number */}
                    <div className="bg-brand-gradient text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mb-3 mx-auto">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="bg-brand-primary/10 p-2 rounded-full w-12 h-12 mx-auto mb-3">
                      <IconComponent className="h-8 w-8 text-brand-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop - positioned correctly in the gap */}
                {index < TRADEMARK_PROCESS.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 translate-x-1/2 z-10 w-6 justify-center">
                    <ArrowRight className="h-6 w-6 text-brand-primary/80" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Information - Compact & Professional Layout */}
        <div className="bg-white rounded-lg shadow-lg border-0 p-6 mb-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Process Overview
            </h3>
            <p className="text-gray-600 text-sm">
              Everything you need to know about our trademark registration process
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary mb-1">6-18</div>
              <div className="text-xs text-gray-600">Months</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-secondary mb-1">24/7</div>
              <div className="text-xs text-gray-600">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-xs text-gray-600">Online Process</div>
            </div>
          </div>

          {/* Timeline & Support - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-brand-primary/10 p-1.5 rounded-full mr-2">
                  <Clock className="h-4 w-4 text-brand-primary" />
                </div>
                <h4 className="font-semibold text-gray-900">Timeline</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {TRADEMARK_PROCESS.timeline}
              </p>
              <div className="p-2 bg-green-50 rounded text-xs text-green-800">
                🎯 Fast-track available for urgent cases
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-brand-secondary/10 p-1.5 rounded-full mr-2">
                  <Users className="h-4 w-4 text-brand-secondary" />
                </div>
                <h4 className="font-semibold text-gray-900">Expert Support</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {TRADEMARK_PROCESS.support}
              </p>
              <div className="p-2 bg-blue-50 rounded text-xs text-blue-800">
                📞 24/7 support for all queries
              </div>
            </div>
          </div>
        </div>

        {/* Government Fee Information */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Avail 50% Discount on Trademark Registration
            </h3>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-700 mb-4">
              For trademark registration, you need to pay <span className="font-bold text-orange-600">₹9,000</span> as Government fees. 
              But if you own a <span className="font-bold text-green-600">MSME/SSI/Udyog Aadhar certificate</span>, 
              this Government fee is reduced to <span className="font-bold text-green-600">₹4,500 (50% discount)</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-lg font-bold text-gray-900">Regular Fee</div>
                <div className="text-2xl font-bold text-orange-600">₹9,000</div>
                <div className="text-sm text-gray-600">Standard government fee</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-lg font-bold text-gray-900">MSME Fee</div>
                <div className="text-2xl font-bold text-green-600">₹4,500</div>
                <div className="text-sm text-gray-600">50% discount with certificate</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTA
          title="Ready to Start Your Trademark Registration?"
          description={`Our expert team is ready to guide you through every step of the trademark registration process. Get started today and protect your brand within 6-18 months.`}
          primaryButton="Start Trademark Registration"
          secondaryButton="Talk to Expert"
          secondaryButtonHref="https://wa.me/917023314773?text=Hi, I need to talk to an expert about trademark registration"
          badge="Quick Start"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default TrademarkProcess;
