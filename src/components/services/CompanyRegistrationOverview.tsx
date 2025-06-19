"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building2, Shield, Award } from "lucide-react";
import { COMPANY_REGISTRATION_OVERVIEW } from "@/lib/services-constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

const CompanyRegistrationOverview = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Company Registration Guide
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {COMPANY_REGISTRATION_OVERVIEW.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {COMPANY_REGISTRATION_OVERVIEW.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Introduction */}
          <Card className="animated-hover shadow-md border-0">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center mb-3">
                <div className="bg-brand-primary/10 p-2 rounded-full mr-3">
                  <Building2 className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {COMPANY_REGISTRATION_OVERVIEW.content.introduction.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {COMPANY_REGISTRATION_OVERVIEW.content.introduction.description}
              </p>
              <div className="space-y-2">
                {COMPANY_REGISTRATION_OVERVIEW.content.introduction.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Incorporation */}
          <Card className="animated-hover shadow-md border-0">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center mb-3">
                <div className="bg-brand-secondary/10 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-brand-secondary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {COMPANY_REGISTRATION_OVERVIEW.content.incorporation.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {COMPANY_REGISTRATION_OVERVIEW.content.incorporation.description}
              </p>
              <div className="space-y-2">
                {COMPANY_REGISTRATION_OVERVIEW.content.incorporation.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <Card className="animated-hover shadow-lg border-0 bg-white mb-8">
          <CardContent className="p-4 md:p-6 lg:p-8">
            <div className="text-center mb-6">
              <div className="bg-brand-gradient p-3 rounded-full w-12 h-12 mx-auto mb-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {COMPANY_REGISTRATION_OVERVIEW.content.whyChooseUs.title}
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto text-sm">
                Trusted by over 1 lakh businesses across India for professional company registration services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {COMPANY_REGISTRATION_OVERVIEW.content.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg animated-hover">
                  <div className="bg-brand-primary/10 p-1.5 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-brand-primary" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <CTA
          title="Ready to Start Your Company Registration?"
          description="Get expert guidance and complete your company registration with our professional team."
          primaryButton="Call Now"
          secondaryButton="Get Free Consultation"
          secondaryButtonHref="/contact"
          badge="Expert Support"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default CompanyRegistrationOverview;
