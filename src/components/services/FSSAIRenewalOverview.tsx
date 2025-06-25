"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Clock, AlertTriangle, Shield } from "lucide-react";
import "@/app/animations.css";

const FSSAIRenewalOverview = () => {
  const highlights = [
    {
      icon: RefreshCw,
      title: "Renewal Required",
      description: "Before License Expiry",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "1-5 Years",
      description: "Validity Period",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: AlertTriangle,
      title: "Rs. 100/Day",
      description: "Late Penalty",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Shield,
      title: "All License Types",
      description: "Basic, State & Central",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const renewalTypes = [
    {
      title: "Basic FSSAI Renewal",
      description: "For businesses with annual turnover less than Rs. 12 Lakhs",
      validity: "1-5 years",
      icon: RefreshCw,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "State FSSAI License Renewal", 
      description: "For businesses with annual turnover Rs. 12 Lakhs - Rs. 20 Crores",
      validity: "1-5 years",
      icon: RefreshCw,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Central FSSAI License Renewal",
      description: "For businesses with annual turnover more than Rs. 20 Crores",
      validity: "1-5 years", 
      icon: RefreshCw,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
            <RefreshCw className="h-4 w-4 mr-2" />
            FSSAI License Renewal
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Why Renew Your FSSAI License on Time?
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Avoid penalties and business disruption by renewing your FSSAI food license before expiry
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
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-red-200">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Important: Mandatory Renewal Before Expiry
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-red-600">FSSAI license is mandatory to be renewed before the expiry validity time</span>, 
                  otherwise you&apos;ll need to apply for a completely new license. Late renewal attracts a penalty of 
                  <span className="font-semibold text-red-600"> Rs. 100 per day</span> beyond the expiry date.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Don&apos;t risk your business operations. Renew your license in advance with our expert assistance to ensure 
                  <span className="font-semibold text-brand-primary"> uninterrupted food business operations</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Renewal Types */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
            What are the different types of License Renewal?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renewalTypes.map((renewal, index) => (
              <Card key={index} className="animated-hover shadow-lg border-0 bg-white h-full">
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${renewal.color}`}>
                    <renewal.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {renewal.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {renewal.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <span className="text-brand-primary font-semibold text-sm">
                      Renewal Validity: {renewal.validity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 md:mt-12">
          <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Difference between FSSAI & Food License Renewal?
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <span className="font-semibold text-brand-primary">FSSAI</span> is the regulatory authority, while 
                <span className="font-semibold text-brand-primary"> Food License</span> is the actual permit that needs renewal. 
                Whether you have a Basic Registration, State License, or Central License, all require timely renewal to maintain 
                legal compliance and avoid penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FSSAIRenewalOverview;
