"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, DollarSign, FileText, Key, Home } from "lucide-react";
import "@/app/animations.css";

const PublicCompanyRequirements = () => {
  const requirements = [
    {
      icon: Users,
      title: "At least 7 Members on-board",
      description: "Minimum 7 shareholders required to start a Public Limited Company",
      highlight: "7+ Members"
    },
    {
      icon: UserCheck,
      title: "Minimum 3 Directors",
      description: "One of them must be a resident of India. Directors and Shareholders can be the same individual",
      highlight: "3+ Directors"
    },
    {
      icon: DollarSign,
      title: "Minimum Authorized Capital",
      description: "Rs. 5,00,000 minimum authorized capital required for Public Limited Company",
      highlight: "₹5 Lakh"
    },
    {
      icon: Key,
      title: "DIN of all the directors",
      description: "Director Identification Number required for all directors",
      highlight: "DIN Required"
    },
    {
      icon: FileText,
      title: "DSC of all the Directors",
      description: "Digital Signature Certificate mandatory for all directors",
      highlight: "DSC Required"
    },
    {
      icon: Home,
      title: "Address of the Company's registered office",
      description: "Valid registered office address proof with utility bills",
      highlight: "Office Address"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <FileText className="h-4 w-4 mr-2" />
            Requirements
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Requirements for Public Limited Company Registration
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Essential requirements to register your Public Limited Company in India
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((requirement, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-white h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <requirement.icon className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <div>
                    <div className="bg-brand-secondary/5 rounded-lg p-2 mb-3 w-fit">
                      <span className="text-brand-secondary font-semibold text-sm">
                        {requirement.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {requirement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicCompanyRequirements;
