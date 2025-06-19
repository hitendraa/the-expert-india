"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { TRADEMARK_RENEWAL_KEY_FACTORS } from "@/lib/services-constants";
import "@/app/animations.css";

const TrademarkRenewalKeyFactors = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <CheckCircle className="h-4 w-4 mr-2" />
            Key Factors
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Key Factors / Important Points
          </h2>
        </div>

        {/* Key Factors List */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4">
                {TRADEMARK_RENEWAL_KEY_FACTORS.map((factor, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-brand-primary/10 p-2 rounded-full flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-brand-primary" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {factor}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrademarkRenewalKeyFactors;
