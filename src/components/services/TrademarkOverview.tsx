"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building2, Shield, Award } from "lucide-react";
import { TRADEMARK_OVERVIEW } from "@/lib/services-constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

const TrademarkOverview = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Trademark Registration Guide
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {TRADEMARK_OVERVIEW.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {TRADEMARK_OVERVIEW.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Introduction */}
          <Card className="animated-hover shadow-md border-0">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-brand-primary/10 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {TRADEMARK_OVERVIEW.content.introduction.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {TRADEMARK_OVERVIEW.content.introduction.description}
              </p>
              <div className="space-y-2">
                {TRADEMARK_OVERVIEW.content.introduction.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card className="animated-hover shadow-md border-0">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-brand-secondary/10 p-2 rounded-full mr-3">
                  <Award className="h-5 w-5 text-brand-secondary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {TRADEMARK_OVERVIEW.content.eligibility.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                {TRADEMARK_OVERVIEW.content.eligibility.description}
              </p>
              <div className="space-y-2">
                {TRADEMARK_OVERVIEW.content.eligibility.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <Card className="shadow-lg border-0 bg-white mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {TRADEMARK_OVERVIEW.content.whyChooseUs.title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TRADEMARK_OVERVIEW.content.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <CTA
          title="Ready to Protect Your Brand?"
          description="Start your trademark registration today and secure exclusive rights to your brand identity. Our experts will guide you through every step of the process."
          primaryButton="Start Trademark Registration"
          secondaryButton="Get Free Consultation"
          secondaryButtonHref="/consultation"
          badge="Brand Protection"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default TrademarkOverview;
