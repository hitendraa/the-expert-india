"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, BarChart3 } from "lucide-react";
import "@/app/animations.css";

const PublicCompanyComparison = () => {
  const comparisonData = [
    {
      criteria: "Members / Shareholders",
      publicCompany: "Minimum: 7 Maximum: No Limit",
      privateCompany: "Minimum: 2 Maximum: 200"
    },
    {
      criteria: "Directors",
      publicCompany: "Minimum: 3",
      privateCompany: "Minimum: 2"
    },
    {
      criteria: "Public Invitations",
      publicCompany: "Yes",
      privateCompany: "No"
    },
    {
      criteria: "Issuance Of Prospectus",
      publicCompany: "Required",
      privateCompany: "Not Required"
    },
    {
      criteria: "Name Variances",
      publicCompany: "Must have 'Limited' at the end of its name",
      privateCompany: "Must have PVT. LTD. at the end of its name"
    },
    {
      criteria: "Mandatory Statutory Meeting",
      publicCompany: "Yes",
      privateCompany: "No"
    },
    {
      criteria: "Managerial Remunerations",
      publicCompany: "There are no as such restrictions",
      privateCompany: "Cannot exceed the limit of 11% of its net profit"
    },
    {
      criteria: "Stock Exchange",
      publicCompany: "Can be enlisted in the stock exchange & conduct the Stock Trade publicly as per the Director's preferences",
      privateCompany: "Not listed on stock exchange neither carry out stock trade publicly"
    }
  ];

  const getStatusIcon = (value: string) => {
    if (value === "Yes" || value === "Required") {
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    } else if (value === "No" || value === "Not Required") {
      return <XCircle className="h-4 w-4 text-red-500" />;
    }
    return null;
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
            <BarChart3 className="h-4 w-4 mr-2" />
            Company Comparison
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Comparison
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Compare Public Limited Company vs Private Limited Company features
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 md:p-4 font-bold text-gray-900 sticky left-0 bg-gray-100 z-10 min-w-[200px]">
                        Topics
                      </th>
                      <th className="text-center p-3 md:p-4 font-bold text-white bg-brand-primary min-w-[300px]">
                        Public Limited Company
                      </th>
                      <th className="text-center p-3 md:p-4 font-bold text-gray-900 min-w-[300px]">
                        Private Limited Company
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 sticky left-0 bg-white z-10 border-r border-gray-100">
                          {row.criteria}
                        </td>
                        <td className="p-3 md:p-4 text-center text-sm bg-brand-primary/10 font-semibold text-brand-primary">
                          <div className="flex items-center justify-center space-x-2">
                            {getStatusIcon(row.publicCompany)}
                            <span>{row.publicCompany}</span>
                          </div>
                        </td>
                        <td className="p-3 md:p-4 text-center text-sm bg-white">
                          <div className="flex items-center justify-center space-x-2">
                            {getStatusIcon(row.privateCompany)}
                            <span>{row.privateCompany}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg shadow-sm">
              <span className="font-semibold text-brand-primary">Note:</span> Public Limited Companies offer 
              greater fundraising opportunities and market credibility but come with higher compliance requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicCompanyComparison;
