"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, CheckCircle, Target } from "lucide-react";

const GSTOverview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              GST Registration - Overview
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding GST Registration in India
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Businesses must register as regular taxable persons under the Goods and Services Tax (GST) 
              if their annual revenue exceeds the threshold limit of Rs. 40 lakhs (in case of goods), 
              Rs. 20 lakhs (in case of services), or Rs. 10 lakhs, as applicable.
            </p>
          </div>

          {/* Key Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-600 text-sm">4 to 6 working days for GST registration completion</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Simple Process</h3>
                <p className="text-gray-600 text-sm">3 simple steps to obtain GST registration quickly</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mandatory</h3>
                <p className="text-gray-600 text-sm">Required if turnover exceeds prescribed limits</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Penalties</h3>
                <p className="text-gray-600 text-sm">Severe penalties for operating without GST registration</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What is GST Registration?</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  GST registration is the process of enrolling your business under the Goods and Services Tax 
                  system. It is mandatory to generate the GSTIN if annual turnover exceeds the prescribed limit.
                </p>
                <p>
                  If the company conducts business without registering for GST, it is an offence and faces 
                  severe penalties. The registration provides a unique identification number (GSTIN) for 
                  GST compliance.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key GST Terms</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900">GSTIN</h5>
                    <p className="text-gray-600 text-sm">
                      Each GST taxpayer receives a unique identification number. Anyone with a GST number 
                      can access the GST portal to validate a GSTIN number.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-gray-900">GSTN</h5>
                    <p className="text-gray-600 text-sm">
                      The Goods and Service Tax Network (GSTN) is a section 8 (non-profit) private limited 
                      business that operates the GST portal and manages the taxation platform.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold text-gray-900">GST Return</h5>
                    <p className="text-gray-600 text-sm">
                      A GST return is a record of income that must be submitted to the tax authorities. 
                      Taxpayers must submit monthly/quarterly and annual returns electronically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Turnover Thresholds</h3>
              
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Goods Trading</h4>
                    <p className="text-gray-600">₹40 Lakhs annual turnover</p>
                    <p className="text-sm text-gray-500 mt-1">
                      ₹10 Lakhs for North-Eastern states, J&K, Himachal Pradesh and Uttarakhand
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Service Provider</h4>
                    <p className="text-gray-600">₹20 Lakhs annual turnover</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Same limit applies across all states
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Special Categories</h4>
                    <p className="text-gray-600">₹10 Lakhs annual turnover</p>
                    <p className="text-sm text-gray-500 mt-1">
                      For businesses in special category states
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-bold text-red-900 mb-2">⚠️ Important Note</h4>
                <p className="text-red-800 text-sm">
                  E-commerce operators, casual taxpayers, and non-resident taxpayers must register 
                  for GST regardless of the turnover criteria. Interstate suppliers also need GST 
                  registration irrespective of turnover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTOverview;
