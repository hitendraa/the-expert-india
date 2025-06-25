"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Globe, TrendingDown } from "lucide-react";
import "@/app/animations.css";

const LLPOverview = () => {
  const highlights = [
    {
      icon: Users,
      title: "2+ Partners",
      description: "Minimum requirement",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Globe,
      title: "1 Resident",
      description: "Must stay 182 days in India",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: TrendingDown,
      title: "No Min Capital",
      description: "Investment required",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Building2,
      title: "Less Compliance",
      description: "vs Pvt Ltd Company",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            LLP Overview
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            About Limited Liability Partnership
          </h2>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center animated-hover shadow-lg border-0 bg-gradient-to-b from-white to-gray-50">
              <CardContent className="p-4 md:p-6">
                <div className={`p-3 rounded-full w-fit mx-auto mb-3 ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="text-lg md:text-xl font-bold text-brand-primary mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-brand-primary">LLP</span> states Limited Liability Partnership and it is governed by the 
              <span className="font-semibold text-brand-primary"> Limited Liability Partnership Act, 2008</span>. It has got limited liability to the partners. 
              In case of LLP, there are <span className="font-semibold text-brand-primary">two partners involved</span>, where there is 
              <span className="font-semibold text-brand-primary"> no minimum limit of capital investment</span> and one must be resident of India, 
              i.e., he must be staying or have stayed for <span className="font-semibold text-brand-primary">182 days in India</span>.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              LLP is often done for the small type of businesses in India. However, a LLP due to its nature does not allow to issue equity shares, 
              thus it cannot raise money from the general public. One can register a LLP through us in a very less time.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                <TrendingDown className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Key Advantage Over Private Limited Company
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The biggest advantage of LLP form of business over a Pvt Ltd Company is in the fact that there is 
                  <span className="font-semibold text-green-600"> less compliance requirement</span> in comparison to a Company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLPOverview;
