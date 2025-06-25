"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, DollarSign, TrendingUp } from "lucide-react";
import "@/app/animations.css";

const PublicCompanyOverview = () => {
  const highlights = [
    {
      icon: Users,
      title: "7+ Members",
      description: "Minimum requirement",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: DollarSign,
      title: "₹5 Lakh",
      description: "Min Authorized Capital",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Building2,
      title: "3+ Directors",
      description: "1 must be Indian resident",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Stock Exchange",
      description: "Listing allowed",
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
            Public Limited Company
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            About Public Limited Company Registration
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Register your business as a Public Limited Company to access capital markets, 
            raise funds from the public, and establish credibility in the marketplace.
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
              Why Choose Public Limited Company?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              A <span className="font-semibold text-brand-primary">Public Limited Company</span> is the ideal choice for businesses looking to 
              <span className="font-semibold text-brand-primary"> raise capital from the public</span>, list on stock exchanges, and establish 
              maximum credibility in the market. Unlike private companies, public companies can invite public investment and are governed by 
              strict transparency requirements.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With our expert CA/CS team, we provide <span className="font-semibold text-brand-primary">end-to-end assistance</span> in 
              documentation, filing, and follow-ups with ROC & MCA to ensure your company registration is completed seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicCompanyOverview;
