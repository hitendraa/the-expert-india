"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";
import "@/app/animations.css";

const PrivateCompanyCompliance = () => {
  const mainCompliances = [
    {
      icon: Users,
      title: "Board Meetings",
      requirement: "2 board meetings in a calendar year",
      details: "with 1/3rd of the total number of directors or a minimum of 2 directors. The minutes are to be recorded."
    },
    {
      icon: Calendar,
      title: "Annual General Meeting (AGM)",
      requirement: "Required to be conducted every year",
      details: "and there should be a gap of 15 months between each of the two AGMs."
    },
    {
      icon: FileText,
      title: "Auditor Appointment",
      requirement: "Within 15 days of incorporation",
      details: "Appointment of the Auditor through Form ADT-1 to the RoC."
    }
  ];

  const otherCompliances = [
    "Accounts to be Audited by a Statutory Auditor",
    "Filing of Form MGT-7",
    "Filing of Financial Statement (Form AOC-4)",
    "Statutory Audit of Accounts",
    "Maintenance of Statutory Registers"
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4">
            <FileText className="h-4 w-4 mr-2" />
            Legal Compliances
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Compliances for a Private Limited Company in India
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            In order to get a compliance certificate for the private limited company registration there are various aspects that need to be kept in mind. Some of the elements are:
          </p>
        </div>

        {/* Main Compliances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mainCompliances.map((compliance, index) => (
            <Card key={index} className="animated-hover shadow-lg border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <compliance.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {compliance.title}
                </h3>
                <div className="bg-orange-50 rounded-lg p-3 mb-3">
                  <p className="text-orange-700 font-semibold text-sm">
                    {compliance.requirement}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {compliance.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Compliances */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Other RoC Compliances
                </h3>
                <p className="text-gray-600">
                  Apart from these there are other requirements too which are:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherCompliances.map((compliance, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">
                      {compliance}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrivateCompanyCompliance;
