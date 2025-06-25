"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, XCircle, DollarSign, Clock } from "lucide-react";
import "@/app/animations.css";

const FSSAIRenewalPenalty = () => {
  const penalties = [
    {
      scenario: "Late Renewal (After Expiry)",
      penalty: "Rs. 100 per day",
      description: "Daily penalty for every day after license expiry until renewal",
      severity: "medium",
      icon: Clock
    },
    {
      scenario: "Operating with Expired License",
      penalty: "Rs. 5 Lakhs + Business Closure",
      description: "Severe penalty for continuing operations with expired license",
      severity: "critical",
      icon: XCircle
    },
    {
      scenario: "Failure to Renew (Complete Non-compliance)",
      penalty: "New License Required + Full Penalties",
      description: "Must apply for fresh license with all associated penalties and fines",
      severity: "critical",
      icon: AlertTriangle
    },
    {
      scenario: "Labeling Violations During Expired Period",
      penalty: "Up to Rs. 10 Lakhs",
      description: "Additional penalties for labeling violations while license is expired",
      severity: "high",
      icon: DollarSign
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

  const getSeverityIconColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-600";
      case "high":
        return "text-orange-600";
      case "medium":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Renewal Penalties
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Penalty for Non-Renewal of FSSAI License
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Understand the serious consequences of not renewing your FSSAI license on time
          </p>
        </div>

        {/* Warning Alert */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-red-600 mr-4" />
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-2">
                  URGENT: Rs. 100/Day Penalty + Business Shutdown Risk!
                </h3>
                <p className="text-red-700">
                  Every day after your FSSAI license expires, you&apos;re charged Rs. 100 penalty. Operating with expired license can lead to business closure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Penalties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          {penalties.map((penalty, index) => (
            <Card key={index} className={`animated-hover shadow-lg border-2 ${getSeverityColor(penalty.severity)} h-full`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <penalty.icon className={`h-6 w-6 ${getSeverityIconColor(penalty.severity)}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {penalty.scenario}
                    </h3>
                    <div className="bg-white/80 rounded-lg p-3 border mb-3">
                      <span className="text-sm font-semibold text-gray-700">Penalty:</span>
                      <p className="text-lg font-bold text-red-600 mt-1">
                        {penalty.penalty}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {penalty.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Warning */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Renewal Timeline & Consequences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-green-800">Before Expiry</h4>
                  <p className="text-green-700 text-sm">Normal renewal process. No penalties.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-yellow-800">After Expiry (1-30 days)</h4>
                  <p className="text-yellow-700 text-sm">Rs. 100/day penalty. Still renewable.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-red-800">Extended Delay (30+ days)</h4>
                  <p className="text-red-700 text-sm">Higher penalties + risk of license cancellation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 text-white text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Don&apos;t Wait - Renew Today!
            </h3>
            <p className="text-base md:text-lg mb-6 opacity-90">
              The penalty meter is ticking. Every day you delay renewal costs you Rs. 100 plus the risk of business 
              shutdown. Our experts ensure quick renewal processing to save your money and business.
            </p>
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-sm font-semibold">
                ⚡ Renew your FSSAI license in as little as 7-10 days and avoid all penalties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FSSAIRenewalPenalty;
