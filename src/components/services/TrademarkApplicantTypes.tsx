"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Users, 
  Building2, 
  Briefcase, 
  Heart, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { TRADEMARK_APPLICANT_TYPES } from "@/lib/services-constants";
import CTA from "@/components/common/CTA";
import Link from "next/link";
import "@/app/animations.css";

const iconMap = {
  User,
  Users,
  Building2,
  Briefcase,
  Heart,
  Globe
};

const TrademarkApplicantTypes = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Users className="h-4 w-4 mr-2" />
            Who Can Apply
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Who Can Opt for Trademark Registration
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Different types of applicants can register trademarks in India based on their business structure
          </p>
        </div>

        {/* Applicant Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {TRADEMARK_APPLICANT_TYPES.map((type, index) => {
            const IconComponent = iconMap[type.icon as keyof typeof iconMap];
            
            return (
              <Card key={type.id} className="animated-hover shadow-md border-0 h-full bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-brand-primary/10 p-2 rounded-full">
                      <IconComponent className="h-5 w-5 text-brand-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-1">
                    {type.title}
                  </CardTitle>
                  <div className="text-sm text-brand-primary font-medium">
                    {type.subtitle}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Important Requirements for All Applicants
            </h3>
            <p className="text-gray-600">
              Essential criteria that apply to all types of trademark applicants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Unique Mark</div>
              <div className="text-sm text-gray-600">Distinctive and non-generic</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Valid Documents</div>
              <div className="text-sm text-gray-600">Identity and address proof</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Class Selection</div>
              <div className="text-sm text-gray-600">Choose appropriate class</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Legal Standing</div>
              <div className="text-sm text-gray-600">Right to use the mark</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTA
          title="Not Sure Which Category You Fall Under?"
          description="Our trademark experts will help you determine the correct applicant type and guide you through the entire registration process."
          primaryButton="Get Expert Guidance"
          secondaryButton="Check Eligibility"
          secondaryButtonHref="/trademark-eligibility-check"
          badge="Expert Help"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default TrademarkApplicantTypes;
