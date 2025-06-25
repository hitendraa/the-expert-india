"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  TrendingUp, 
  DollarSign,
  Crown,
  Banknote
} from "lucide-react";
import "@/app/animations.css";

const OPCAdvantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Limited Liability",
      description: "The directors personal property is forever safe in no matter the debts of the business. In OPC only investment in the company is lost, personal assets of the directors are saved."
    },
    {
      icon: Clock,
      title: "Continuous Existence",
      description: "An OPC has a seperate legal identity, it would pass on the nominee director, therefore, it has continued existence."
    },
    {
      icon: TrendingUp,
      title: "Greater Credibility",
      description: "An OPC requires to have its books audited yearly, it has credibility between vendors and lending institutions."
    },
    {
      icon: DollarSign,
      title: "Easy to Sell OPC",
      description: "OPC Company is simple to sell because of limited documentation work."
    },
    {
      icon: Crown,
      title: "Full Control Over the company",
      description: "The fact helps in fast decision making and execution. Yet OPC can select as many as 15 directors for official functions, without providing any share to them."
    },
    {
      icon: Banknote,
      title: "Easy to Raise Funds And Loans",
      description: "OPC is 1 of the easiest forms of corporate entities to operate. Very few ROC filing is to be registered with the Registrar of Companies."
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            OPC Benefits
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Advantages of Becoming One Person Company
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the key benefits of registering your business as a One Person Company
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-gradient-to-b from-white to-gray-50 h-full">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="bg-brand-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <advantage.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OPCAdvantages;
