"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  TrendingUp, 
  Scale, 
  DollarSign,
  RefreshCw,
  Eye,
  Award
} from "lucide-react";
import "@/app/animations.css";

const PublicCompanyAdvantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Shareholders' Limited Liability",
      description: "In a Public Limited Company, the accountability of the Shareholders and Directors is limited according to the amount of the shares they own in the organization. For instance, if the public limited company face any financial emergencies, the personal assets of the shareholders will not be affected as per the regulations."
    },
    {
      icon: TrendingUp,
      title: "Listing in the Stock Exchange",
      description: "Unlike a Private Limited organization, Public Limited companies can list themselves to the IPO (Indian Public Offerings) and the popular Stock Exchanges. This leads to several business-related benefits and opportunities."
    },
    {
      icon: Scale,
      title: "Distinct Legal Entity",
      description: "In a Public Limited Company, the existence of the entity does not depend on any individuals' presence in the organization. For example, any Shareholder or Director may leave the organization without affecting the actuality of the particular Public Limited Company."
    },
    {
      icon: DollarSign,
      title: "Countless sources for Fund-Raising",
      description: "A Public Limited Company can raise its resources by crowd-funding or from the common people's involvement following the legal aspects. It helps an entity surviving in the marketplace and going for new ventures with ease."
    },
    {
      icon: RefreshCw,
      title: "Simple Transferability of Shares",
      description: "Following the regulations of the Companies Act, 2013, the shares of a Public Limited company can be transferred without any hassle. Added on that, being listed in the Stock Exchange and transferability feature, people are always willing to invest leading to financial aids for the same."
    },
    {
      icon: Eye,
      title: "Cautious on Business Transparency",
      description: "As a Public Limited company involves public interaction and involvement in all the stages, the organization always looks for clarity in the business operation by publishing the Audit Credentials, Statutory Reports to its people."
    },
    {
      icon: Award,
      title: "Upholds the Brand Position in Marketplace",
      description: "It is always beneficial for an organization while being registered as a Public Limited company. Being listed in the Stock Exchange and publishing the reports to its people enhances its Brand Image and reputation in the market."
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
            Benefits of Registering a Public Limited Company
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the key advantages of registering your business as a Public Limited Company
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

export default PublicCompanyAdvantages;
