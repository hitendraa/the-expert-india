"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Calendar, TrendingUp } from "lucide-react";
import "@/app/animations.css";

const PrivateCompanyOverview = () => {
  const stats = [
    {
      icon: Building2,
      number: "90%",
      label: "Companies in India",
      description: "are Private Limited"
    },
    {
      icon: Calendar,
      number: "150,000+",
      label: "Companies Registered",
      description: "yearly basis"
    },
    {
      icon: Users,
      number: "10+ Years",
      label: "Experience",
      description: "CA/CS experts"
    },
    {
      icon: TrendingUp,
      number: "Same Day",
      label: "Processing",
      description: "documentation"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Company Overview
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Overview
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center animated-hover shadow-lg border-0 bg-gradient-to-b from-white to-gray-50">
              <CardContent className="p-4 md:p-6">
                <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="text-lg md:text-xl font-bold text-brand-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
              Private Limited Company in India is one of the popular forms of business entities. 
              Approximately <span className="font-semibold text-brand-primary">90% of companies in India</span> are 
              registered under Private Limited Company. There are more than <span className="font-semibold text-brand-primary">150,000 companies</span> that 
              are being registered on a yearly basis. It is a separate legal entity with limited liability and 
              perpetual existence incorporated now under the <span className="font-semibold text-brand-primary">Companies Act, 2013</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCompanyOverview;
