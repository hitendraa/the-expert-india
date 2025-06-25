"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, XCircle, DollarSign, Building2 } from "lucide-react";
import "@/app/animations.css";

const FSSAIPenalties = () => {
  const penalties = [
    {
      offense: "The sale of food without the FSSAI licence",
      penalty: "Rs. 5 Lakhs + Imprisonment",
      severity: "high"
    },
    {
      offense: "The sale of substandard quality of food",
      penalty: "Rs. 5 Lakhs",
      severity: "high"
    },
    {
      offense: "The sale of misbranded products",
      penalty: "Rs. 3 Lakhs",
      severity: "medium"
    },
    {
      offense: "The production, processing and storage of food with unethical means",
      penalty: "Rs. 1 Lakh",
      severity: "medium"
    },
    {
      offense: "The production, processing and storage of food with unhealthy means",
      penalty: "Rs. 1 Lakh",
      severity: "medium"
    },
    {
      offense: "If the person suffers because of low quality food",
      penalty: "Rs. 5 Lakhs",
      severity: "high"
    },
    {
      offense: "Fails to rectify mistakes after notice",
      penalty: "Business shutdown + License cancellation",
      severity: "critical"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-700 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Building2 className="h-5 w-5 text-red-600" />;
      case "high":
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case "medium":
        return <DollarSign className="h-5 w-5 text-yellow-600" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Legal Penalties
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Penalties and Offences for Non-compliance
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            The Food Safety and Standard Authority of India (FSSAI) takes the matters related to the production and processing of food seriously. 
            There is Section 50 to Section 65 that deals with the offenses under the FSSAI 2006.
          </p>
        </div>

        {/* Warning Alert */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-4" />
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-2">
                  URGENT: Rs. 5 Lakh Fine + 6 Months Jail for Operating Without FSSAI License!
                </h3>
                <p className="text-red-700">
                  Don&apos;t risk your business and freedom. Get your FSSAI license immediately to avoid severe legal consequences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Penalties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {penalties.map((penalty, index) => (
            <Card key={index} className={`animated-hover shadow-lg border-2 ${getSeverityColor(penalty.severity)} h-full`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getSeverityIcon(penalty.severity)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {penalty.offense}
                    </h3>
                    <div className="bg-white/80 rounded-lg p-3 border">
                      <span className="text-sm font-semibold text-gray-700">Penalty:</span>
                      <p className="text-lg font-bold text-red-600 mt-1">
                        {penalty.penalty}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 text-white text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Don&apos;t Wait - Get Protected Today!
            </h3>
            <p className="text-base md:text-lg mb-6 opacity-90">
              The penalties are severe and enforcement is strict. Protect your business, your customers, and yourself by getting 
              your FSSAI license immediately. Our experts ensure 100% compliance and quick approval.
            </p>
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-sm font-semibold">
                ⚡ Get your FSSAI license in as little as 7-15 days with our expert assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FSSAIPenalties;
