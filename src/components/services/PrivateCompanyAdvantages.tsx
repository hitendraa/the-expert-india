"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  TrendingUp, 
  RefreshCw, 
  DollarSign, 
  Clock, 
  Banknote,
  Building,
  Scale,
  Calculator,
  FileText
} from "lucide-react";
import "@/app/animations.css";

const PrivateCompanyAdvantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Limited Liability",
      description: "If a private limited company was in financial trouble and had to close, shareholders would not risk losing their personal assets."
    },
    {
      icon: TrendingUp,
      title: "Helpful in Startup India Registration",
      description: "Under the Startup India scheme you can avail lot of the benefits like raise the funds, subsidy for the trademark registration etc."
    },
    {
      icon: RefreshCw,
      title: "Easy Transferable Ownership",
      description: "It is easier to subscribe or leave the membership of the company. Also it is easier to transfer the ownership."
    },
    {
      icon: DollarSign,
      title: "Selling the Business",
      description: "As business Corporation value will be based on the business, not the owner, therefore making it easier to sell the company."
    },
    {
      icon: Clock,
      title: "Perpetual Succession",
      description: "The company shall continue to exist till it's wind up in accordance with the provisions of the relevant law."
    },
    {
      icon: Banknote,
      title: "Raising Money",
      description: "As per Companies act 2013 a company can sell shares to the public or can accept deposits from public and can therefore raise money easier than other business structure types."
    },
    {
      icon: Building,
      title: "Separate Property",
      description: "A Company as a legal entity is capable of owning its funds and other properties. The property of Company is not the property of its shareholders."
    },
    {
      icon: Scale,
      title: "Better Governed",
      description: "Companies are governed by the companies Act, 2013 and have to follow various other regulatory procedures during the course of its governance."
    },
    {
      icon: Calculator,
      title: "Taxation",
      description: "Companies are often taxed at a lower rate and are provided with better taxable benefits as compared to other forms of business organization."
    },
    {
      icon: FileText,
      title: "Capacity To Sue",
      description: "As a juristic legal person, a company can sue in its name and be sued by others."
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Company Benefits
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Advantages of Becoming Private Limited Company
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the key benefits of registering your business as a Private Limited Company
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-gradient-to-b from-white to-gray-50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-primary/10 p-3 rounded-lg flex-shrink-0">
                    <advantage.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {advantage.description}
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

export default PrivateCompanyAdvantages;
