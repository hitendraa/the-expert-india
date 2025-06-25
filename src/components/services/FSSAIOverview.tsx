"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Building2, Utensils } from "lucide-react";
import "@/app/animations.css";

const FSSAIOverview = () => {
  const highlights = [
    {
      icon: FileText,
      title: "FoSCos License",
      description: "Food Safety Compliance System",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Shield,
      title: "3 Types",
      description: "Basic, State & Central",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Building2,
      title: "All States",
      description: "Pan-India Support",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Utensils,
      title: "Food Safety",
      description: "Customer Trust",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const licenseTypes = [
    {
      title: "Basic FSSAI Registration",
      turnover: "Annual turnover less than Rs. 12 Lakhs",
      validity: "1-5 years",
      icon: FileText,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "State FSSAI License", 
      turnover: "Annual turnover Rs. 12 Lakhs - Rs. 20 Crores",
      validity: "1-5 years",
      icon: Building2,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Central FSSAI License",
      turnover: "Annual turnover more than Rs. 20 Crores",
      validity: "1-5 years", 
      icon: Shield,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Utensils className="h-4 w-4 mr-2" />
            FSSAI Food License
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            What is FoSCos / FSSAI Food License?
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Get your food business legally compliant with FSSAI registration and avoid hefty penalties
          </p>
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
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              What is the difference between FSSAI/FoSCoS/Food License?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-brand-primary">FSSAI (Food Safety and Standards Authority of India)</span> is the regulatory body, 
              <span className="font-semibold text-brand-primary"> FoSCoS (Food Safety Compliance System)</span> is the online platform for 
              applications, and the <span className="font-semibold text-brand-primary">Food License</span> is the actual certificate that 
              authorizes your food business operations.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              FoSCoS is integrated with other government platforms like GST, PAN, MCA to provide a 
              <span className="font-semibold text-brand-primary"> 360-degree business profiling</span> and streamlined processes.
            </p>
          </div>
        </div>

        {/* License Types */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
            What are the different types of License?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenseTypes.map((license, index) => (
              <Card key={index} className="animated-hover shadow-lg border-0 bg-white h-full">
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${license.color}`}>
                    <license.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {license.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {license.turnover}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <span className="text-brand-primary font-semibold text-sm">
                      Validity: {license.validity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FSSAIOverview;
