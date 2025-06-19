"use client";

import { Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { TRADEMARK_RENEWAL_ELIGIBILITY } from "@/lib/services-constants";
import "@/app/animations.css";

const TrademarkRenewalEligibility = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <Users className="h-4 w-4 mr-2" />
            Eligibility
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {TRADEMARK_RENEWAL_ELIGIBILITY.title}
          </h2>
        </div>

        {/* Eligible Entities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TRADEMARK_RENEWAL_ELIGIBILITY.eligibleEntities.map((entity, index) => (
            <Card key={index} className="animated-hover shadow-md border-0 text-center p-4">
              <CardContent className="p-2">
                <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {entity}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-8">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="font-bold text-brand-primary text-lg">1 Lac+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="font-bold text-brand-primary text-lg">4,500+</div>
            <div className="text-sm text-gray-600">Google Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkRenewalEligibility;
