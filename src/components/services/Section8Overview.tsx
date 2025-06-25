"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Building2, Users, GraduationCap } from "lucide-react";
import "@/app/animations.css";

const Section8Overview = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Non-Profit",
      description: "NPO/NGO Organization",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Building2,
      title: "No Min Capital",
      description: "Capital Requirement",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Social Welfare",
      description: "Community Focus",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Charity & Arts",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <Heart className="h-4 w-4 mr-2" />
            Section 8 Company
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            What is a Section 8 Company?
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Register your non-profit organization under Section 8 of the Companies Act 2013 
            for social welfare, education, charity, and community development.
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              About Section 8 Company Registration
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              A company is referred to as <span className="font-semibold text-brand-primary">Section 8 Company</span> when it registered as a 
              <span className="font-semibold text-brand-primary"> Non-Profit Organization (NPO)</span> or Non-Governmental organizations (NGOs) 
              i.e. when it has motive of promoting arts, commerce, education, charity, protection of environment, sports, science, research, 
              social welfare, religion and intends to use its profits (if any) or other income for under section 8(1a, 1b, 1c) of the 
              <span className="font-semibold text-brand-primary"> Companies Act, 2013</span>.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our expert CA/CS panel provides <span className="font-semibold text-brand-primary">comprehensive assistance</span> in 
              documentation, preparation, filing, and follow-ups with ROC & MCA to ensure your Section 8 Company registration is completed seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8Overview;
