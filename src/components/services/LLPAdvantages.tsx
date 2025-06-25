"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  DollarSign, 
  FileCheck, 
  Calculator,
  RefreshCw,
  Clock
} from "lucide-react";
import "@/app/animations.css";

const LLPAdvantages = () => {
  const advantages = [
    {
      icon: Scale,
      title: "Distinct Legal Recognition",
      description: "LLPs are treated as separate legal entities so the partners and LLP are distinct from each other in the eyes of the law."
    },
    {
      icon: DollarSign,
      title: "Raising Capital / Money",
      description: "Financing a small business like a sole proprietorship or partnership can be difficult at times. An LLP being a regulated entity like a company can attract finance from PE Investors, financial institutions, etc."
    },
    {
      icon: FileCheck,
      title: "No Mandatory Audit Requirement",
      description: "In LLP, only in the case of business, where the annual turnover/contribution exceeds Rs 40 Lacs/Rs 25 Lacs are required to get their account audited annually by a chartered accountant."
    },
    {
      icon: Calculator,
      title: "Taxation Relief",
      description: "LLP is not required to pay the surcharge on income tax. Moreover, it is also not required to pay tax on profits distributed to partners whereas Company is required to pay dividend tax distributed to its shareholders."
    },
    {
      icon: RefreshCw,
      title: "Easy Transferable ownership",
      description: "It is easier to transfer the ownership in accordance with the terms of the LLP Agreement. Ceasing of old partners and coming of new partners"
    },
    {
      icon: Clock,
      title: "Perpetual Succession",
      description: "An incorporated LLP has perpetual succession. Notwithstanding any changes in the partners of the LLP, the LLP will be the same entity with the same privileges, immunities, estates, and possessions."
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
            <Scale className="h-4 w-4 mr-2" />
            LLP Benefits
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Advantages of LLP
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the key benefits of registering your business as a Limited Liability Partnership
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

export default LLPAdvantages;
