"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, Globe } from "lucide-react";
import "@/app/animations.css";

const EligibilitySection = () => {
  const eligibilityItems = [
    {
      icon: Users,
      title: "Number of Directors",
      requirement: "Minimum 2 and Maximum 15",
      description: "At least 2 directors required to start a Private Limited Company"
    },
    {
      icon: UserCheck,
      title: "Number of Shareholders",
      requirement: "Minimum 2 and Maximum 200",
      description: "However, one person can act as both director and shareholder"
    },
    {
      icon: Globe,
      title: "Citizenship",
      requirement: "At least one director should hold Indian Citizenship",
      description: "Mandatory requirement for company registration in India"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <UserCheck className="h-4 w-4 mr-2" />
            Eligibility Criteria
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Eligibility to form Private Limited Company
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Check the requirements to register your Private Limited Company in India
          </p>
        </div>

        {/* Eligibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {eligibilityItems.map((item, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-brand-secondary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="bg-brand-secondary/5 rounded-lg p-3 mb-3">
                  <p className="text-brand-secondary font-semibold text-sm">
                    {item.requirement}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
