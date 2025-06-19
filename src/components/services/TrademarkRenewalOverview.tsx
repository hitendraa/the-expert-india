"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRADEMARK_RENEWAL_OVERVIEW } from "@/lib/services-constants";
import "@/app/animations.css";

const TrademarkRenewalOverview = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            Overview
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {TRADEMARK_RENEWAL_OVERVIEW.title}
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            {TRADEMARK_RENEWAL_OVERVIEW.description}
          </p>
        </div>

        {/* Renewal Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {TRADEMARK_RENEWAL_OVERVIEW.renewalTypes.map((type, index) => (
            <Card key={index} className="animated-hover shadow-md border-0 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-brand-primary">
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium">
            {TRADEMARK_RENEWAL_OVERVIEW.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrademarkRenewalOverview;
