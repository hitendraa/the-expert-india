"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Scale, 
  Award, 
  TrendingUp, 
  Globe, 
  CheckCircle,
  Star
} from "lucide-react";
import { TRADEMARK_BENEFITS } from "@/lib/services-constants";
import "@/app/animations.css";

const iconMap = {
  Shield,
  Scale,
  Award,
  TrendingUp,
  Globe,
  CheckCircle
};

const TrademarkBenefits = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <Star className="h-4 w-4 mr-2" />
            Trademark Benefits
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Advantages of Registering Your Trademark
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the powerful benefits that come with trademark registration and why it&apos;s essential for your business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {TRADEMARK_BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            
            return (
              <Card key={index} className="animated-hover shadow-md border-0 h-full bg-white">
                <CardHeader className="pb-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-brand-primary" />
                  </div>
                  <CardTitle className="text-center text-lg font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 md:p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Why Trademark Registration is Essential
            </h3>
            <p className="text-gray-600">
              Protect your brand investment and build lasting customer trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="text-2xl font-bold text-brand-primary">10 Years</div>
                <div className="text-sm text-gray-600">Protection Period</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="text-2xl font-bold text-brand-secondary">45</div>
                <div className="text-sm text-gray-600">Trademark Classes</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Legal Protection</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <div className="text-2xl font-bold text-orange-600">Global</div>
                <div className="text-sm text-gray-600">Recognition Base</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkBenefits;
