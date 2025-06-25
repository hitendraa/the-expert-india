"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, FileText, Globe, HelpCircle } from "lucide-react";
import { SITE_FULL_NAME } from "@/lib/constants";
import "@/app/animations.css";

const Section8Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Who will be Preparing & Registering Your Section 8 Company?",
      description: "A panel of 25+ efficient Chartered Accountants who are always prepared to provide you the adequate online assistance."
    },
    {
      icon: UserCheck,
      title: "Our esteemed CAs will be preparing will handling your accounts personally",
      description: "Dedicated CA assignment for personalized service and attention to your specific requirements."
    },
    {
      icon: FileText,
      title: "India's most efficient CA panel",
      description: "Expert team with extensive experience in Section 8 Company registrations and compliance."
    },
    {
      icon: Globe,
      title: "360° Corporate Legal Compliance",
      description: "Complete compliance support covering all legal and regulatory requirements for Section 8 companies."
    },
    {
      icon: HelpCircle,
      title: "Paperless documentation",
      description: "Streamlined digital process for faster registration and minimal paperwork hassles."
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <Users className="h-4 w-4 mr-2" />
            Expert Services
          </Badge>          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Benefits of Registering Sec-8 Company from {SITE_FULL_NAME}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Why choose our expert CA/CS panel for your Section 8 Company registration
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-white h-full">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-brand-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 md:mt-12">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Expert CA/CS Panel at Your Service
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our dedicated team of <span className="font-semibold text-brand-primary">25+ Chartered Accountants</span> ensures 
                your Section 8 Company registration is handled with utmost professionalism. From documentation to final approval, 
                we provide <span className="font-semibold text-brand-primary">360° support</span> for your non-profit organization setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8Benefits;
