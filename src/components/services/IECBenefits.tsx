"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Award, 
  Shield, 
  TrendingUp, 
  Gift
} from "lucide-react";

const IECBenefits = () => {
  const benefits = [
    {
      icon: Globe,
      title: "International Market Reach",
      subtitle: "International Market Reach",
      description: "Import Export Code helps you in order to take your business to the international market. Not only that, it will increase your revenue as well as growth.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      title: "Niryat Bandhu Scheme",
      subtitle: "Niryat Bandhu Scheme",
      description: "The Niryat Bandhu scheme of DGFT Main Objective is to Help Entrepreneurs, Exporters, Importers, and students of this Subject to help learn and provide certification in Export & Import Management.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Reduces the Risk of Illegal Transportation",
      subtitle: "Reduces the Risk of Illegal Transportation",
      description: "IEC helps you to get rid of any illegal transportation or fraudulent imports and exports. IEC registration is a centralized registration which helps the officials to supervise and manage the transaction in a better manner which is undertaken as a part of cross border business.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Gift,
      title: "Easy Avail Benefit of Govt. Schemes",
      subtitle: "Easy Avail Benefit of Govt. Schemes",
      description: "IEC Code offers great benefit for Import Export business. An IEC registered business entity would be qualified to avail benefits or subsidies declared by the Customs, Export Promotion Council and other several authorities. After filing Letter of Undertaking under GST, the exporters are not required to pay taxes to make exports. If the exports are made by payment of taxes, the exporter can claim refunds of the paid tax amount.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Other Benefits",
      subtitle: "Other Benefits",
      description: "Companies that register for the Import Export Code could make the most of several other benefits offered by customs, the Export Promotion Council, and the Director General of Foreign Trade.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Key Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advantages of IEC for Import Export Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock numerous benefits and opportunities for your import-export business with 
              an IEC registration that opens doors to global markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-gray-200 hover:border-l-blue-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-full ${benefit.bgColor} flex-shrink-0`}>
                      <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Expand Your Business Globally?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Get your IEC registration done quickly and start your import-export journey 
              with complete legal compliance and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Start IEC Registration
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Expert Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IECBenefits;
