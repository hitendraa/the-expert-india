"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Scale, TrendingUp, CheckCircle } from "lucide-react";
import { TRADEMARK_RENEWAL_BENEFITS } from "@/lib/services-constants";
import "@/app/animations.css";

const iconMap = {
  Shield,
  Scale,
  TrendingUp,
  CheckCircle
};

const TrademarkRenewalBenefits = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Benefits
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Benefits from the Service
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRADEMARK_RENEWAL_BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            
            return (
              <Card key={index} className="animated-hover shadow-md border-0 h-full text-center">
                <CardHeader className="pb-4">
                  <div className="bg-brand-secondary/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <CardTitle className="text-center">
                    <div className="text-lg font-bold text-brand-secondary mb-1">
                      {benefit.title}
                    </div>
                    <div className="text-base font-semibold text-gray-900">
                      {benefit.subtitle}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrademarkRenewalBenefits;
