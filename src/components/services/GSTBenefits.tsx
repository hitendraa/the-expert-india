"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  CreditCard, 
  Truck, 
  ShoppingCart, 
  Zap,
  CheckCircle,
  Building,
  Shield,
  Users
} from "lucide-react";

const GSTBenefits = () => {
  const businessBenefits = [
    {
      icon: TrendingUp,
      title: "Become more competitive in Market",
      description: "Interstate trading is impossible without having a GST number. It is possible only after registering the business under GST.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: ShoppingCart,
      title: "Expansion of business online",
      description: "You must acquire a GSTIN if you are willing to compete with big brands like Amazon, Flipkart, Shopify, Paytm on ecommerce platform or through your own website.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: CreditCard,
      title: "Get Input Tax Credit",
      description: "If you have a GST Number, you can avail Input Tax Credit while filing for GST return.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Truck,
      title: "Interstate sales without restrictions",
      description: "You can sell your products in other states only after completing the registration for GST.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const systemBenefits = [
    {
      icon: Zap,
      title: "Simplifies taxation services",
      description: "The GST has integrated the Indian market by bringing together several indirect taxes under a single roof."
    },
    {
      icon: TrendingUp,
      title: "Reduction in costs of products & services",
      description: "The cascading impact of numerous taxes and VATs was eliminated by implementing GST, which decreased the cost of goods and services."
    },
    {
      icon: CheckCircle,
      title: "Helps avoid lengthy taxation services",
      description: "Small businesses benefit from GST registration since it lets them avoid time-consuming tax services."
    },
    {
      icon: Shield,
      title: "Aimed at reducing corruption and sales without receipts",
      description: "The GST was implemented with the intention of eliminating fraud and un-receipted sales."
    },
    {
      icon: Building,
      title: "Uniformity in the taxation process",
      description: "GST registration provides for centralised registration and brings uniformity to the taxation process."
    },
    {
      icon: Users,
      title: "Composition scheme for small businesses",
      description: "Small businesses with revenue up to Rs. 1.5 crores can gain from the GST using the Composition scheme."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Benefits of GST Registration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Your Business Needs GST Registration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GST registration opens up numerous opportunities for your business growth and ensures compliance 
              with Indian tax regulations.
            </p>
          </div>

          {/* Business Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Having GST Number
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {businessBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${benefit.bgColor} flex-shrink-0`}>
                        <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* System Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Benefits of GST Registration System
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GST Registration Fees Info */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">GST Registration Fees</h3>
                <p className="text-gray-600 mb-6">
                  The lengthy 11-step procedure of registering for GST necessitates the submission of numerous 
                  business details and scanned documents. Although there are no fees specified by the GST law 
                  for self-register on the GST system, purchasing the GST registration plan with our expert 
                  assistance can save you a tonne of time and hassle.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">💡 Expert Tip</h4>
                  <p className="text-blue-800 text-sm">
                    Choose our GST Registration services, where a GST Expert will help you with GST Registration 
                    from beginning to end, ensuring error-free and quick processing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Penalty Information */}
          <div className="mt-8">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  ⚠️ Penalty for not obtaining GST registration
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <p className="text-red-800">
                      <strong>Short Payment/Non-Payment:</strong> A penalty of 10% of the tax amount owed, 
                      subject to a minimum of Rs. 10,000, must be paid by the violator who fails to pay 
                      taxes or makes short payments.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <p className="text-red-800">
                      <strong>Intentional Tax Evasion:</strong> When the offender has purposefully avoided 
                      paying taxes, the penalty is 100% of the amount owed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTBenefits;
