"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  FileText, 
  TrendingUp, 
  Users,
  Building2,
  Heart
} from "lucide-react";
import "@/app/animations.css";

const Section8Advantages = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "No Minimum Capital Requirement",
      description: "No minimum capital limit has been mentioned for a Section 8 Company in India. And the capital structure may be altered at any stage as per the growth requirements of the company. This implies that it can be formed without any share capital.",
      highlight: "Capital"
    },
    {
      icon: FileText,
      title: "Zero Stamp Duty",
      description: "A Section 8 Company is exempt from the requirement of paying stamp duty on the MoA and AoA of the private or public limited company. Which is applicable for registration of other kinds of company structures.",
      highlight: "Zero Stamp Duty"
    },
    {
      icon: TrendingUp,
      title: "Exemption to the donors",
      description: "Those donating to a Section 8 Company are eligible for tax exemptions u/s 12A and 80G of the Income Tax Act.",
      highlight: "Donors"
    },
    {
      icon: Users,
      title: "Membership",
      description: "A registered partnership firm can become a member in its individual capacity and obtain Directorship.",
      highlight: "Membership"
    },
    {
      icon: Building2,
      title: "Name",
      description: "Section 8 Company does not need to suffix Limited or Private Limited, next to its legal name. It can be registered with names that have words like Association, Society, Council, Club, Charities, Foundation, Academy, Institute, Organisation, and Federation.",
      highlight: "Name"
    },
    {
      icon: Heart,
      title: "Donation & Funding",
      description: "Section 8 Company is not allowed to raise capitals by way of deposits but they can accept donations from the general public. There is no limitation to domestic donations. But to avoid money laundering cases, a proper system must be laid down to keep them in check.",
      highlight: "Save Money"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Company Advantages
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Advantages of Registering a Section 8, Companies Act 2013
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover the key benefits and advantages of Section 8 Company registration in India
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
                    <div className="bg-brand-primary/5 rounded-lg p-2 mb-3 w-fit">
                      <span className="text-brand-primary font-semibold text-sm">
                        {advantage.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
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

        {/* Additional Info */}
        <div className="mt-8 md:mt-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Why Choose Section 8 Company?
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Section 8 Companies offer unique advantages for <span className="font-semibold text-brand-primary">non-profit organizations</span>, 
                including tax exemptions, no minimum capital requirements, and the ability to accept donations. Perfect for organizations 
                focused on <span className="font-semibold text-brand-primary">social welfare, education, charity, and community development</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8Advantages;
