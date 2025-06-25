"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  recommended: boolean;
  features: string[];
  excludes: string[];
}

interface ServicePricingProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  note?: string;
}

const ServicePricing = ({ title, subtitle, plans, note }: ServicePricingProps) => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Phone className="h-4 w-4 mr-2" />
            Professional Fees
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>        {/* Pricing Plans */}
        <div className={`grid gap-6 mb-8 max-w-7xl mx-auto ${
          plans.length === 1 
            ? 'grid-cols-1 max-w-md mx-auto' 
            : plans.length === 2 
            ? 'grid-cols-1 md:grid-cols-2' 
            : plans.length === 3
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : plans.length === 4
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
        }`}>          {plans.map((plan) => (
            <div key={plan.id} className="relative w-full">
              <Card className={`animated-hover shadow-lg border-0 h-full w-full ${
                plan.recommended 
                  ? 'ring-2 ring-brand-primary bg-gradient-to-b from-white to-brand-primary/5' 
                  : 'bg-white'
              }`}>                {plan.recommended && (
                  <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-primary text-white px-3 md:px-4 py-1 text-xs">
                      Recommended
                    </Badge>
                  </div>
                )}
                  <CardHeader className="text-center pb-3 md:pb-4">
                  <CardTitle className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {plan.title}
                  </CardTitle>
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3 md:space-y-4 px-4 md:px-6 pb-4 md:pb-6">
                  {/* Features */}
                  <div className="space-y-1.5 md:space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <div className="pt-3 md:pt-4">
                    <Button 
                      size="sm"
                      className={`w-full font-semibold transition-all duration-300 text-xs md:text-sm ${
                        plan.recommended
                          ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                      asChild
                    >
                      <a href={`tel:${CONTACT_INFO.phone}`}>
                        <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                        Contact Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Note */}
        {note && (
          <div className="text-center">
            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-sm max-w-2xl mx-auto">
              {note}
            </p>
          </div>
        )}        {/* Contact CTA */}
        <div className="mt-8">
          <CTA
            variant="gradient"
            size="compact"
            title="Need Help Choosing the Right Plan?"
            description="Our experts will help you select the best package for your needs"
            primaryButton="Call Expert"
            secondaryButton="WhatsApp Chat"
            badge="Expert Guidance"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
