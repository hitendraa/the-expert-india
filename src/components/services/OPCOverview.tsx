"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building2, Clock, TrendingUp } from "lucide-react";
import "@/app/animations.css";

const OPCOverview = () => {
  const highlights = [
    {
      icon: User,
      title: "Only 1 Person",
      description: "Required to start",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "7-10 Days",
      description: "Registration time",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Building2,
      title: "Separate Entity",
      description: "Legal identity",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Full Control",
      description: "Over company decisions",
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
            OPC Overview
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            About One Person Company
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
              With the introduction of the <span className="font-semibold text-brand-primary">Companies Act, 2013</span> the concept of the 
              <span className="font-semibold text-brand-primary"> One Person Company</span> came into existence to motivate the small traders and entrepreneurs 
              who has the potentiality to start their own business and build up their own identity.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              The biggest advantages of starting a One Person Company are that <span className="font-semibold text-brand-primary">only one person is required</span> to 
              start the business. An entrepreneur can be the master of their own domain in case of One Person Company (OPC). Wherein in case of Private Limited Company or LLP, 
              <span className="font-semibold text-brand-primary"> minimum of two members</span> is needed to be incorporated.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Government Initiative for Entrepreneurs
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  One Person Company was introduced in the <span className="font-semibold text-green-600">J.J Report</span> to create empowerment for the entrepreneurs 
                  where they can give a shape to their ideas. As there is a progress in the use of information technology and growth in the service sector in India, 
                  government has launched the concept of OPC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OPCOverview;
