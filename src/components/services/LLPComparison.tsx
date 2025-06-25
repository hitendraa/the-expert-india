"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, BarChart3 } from "lucide-react";
import "@/app/animations.css";

const LLPComparison = () => {
  const comparisonData = [
    {
      criteria: "Act",
      values: [
        "Companies Act, 2013",
        "Companies Act, 2013", 
        "Limited Liability Partnership Act, 2008",
        "Indian Partnership Act, 1932",
        "No specified Act"
      ]
    },
    {
      criteria: "Registration Requirement",
      values: [
        "Mandatory",
        "Mandatory",
        "Mandatory", 
        "Optional",
        "No"
      ]
    },
    {
      criteria: "Number of members",
      values: [
        "2 – 200",
        "Only 1",
        "2 – Unlimited",
        "2 – 50", 
        "Only 1"
      ]
    },
    {
      criteria: "Separate Legal Entity",
      values: [
        "Yes",
        "Yes",
        "Yes",
        "No",
        "No"
      ]
    },
    {
      criteria: "Liability Protection",
      values: [
        "Limited",
        "Limited", 
        "Limited",
        "Unlimited",
        "Unlimited"
      ]
    },
    {
      criteria: "Statutory Audit",
      values: [
        "Mandatory",
        "Mandatory",
        "Dependent",
        "Not mandatory",
        "Not mandatory"
      ]
    },
    {
      criteria: "Ownership Transfer ability",
      values: [
        "Yes",
        "No",
        "Yes", 
        "No",
        "No"
      ]
    },
    {
      criteria: "Uninterrupted Existence",
      values: [
        "Yes",
        "Yes",
        "Yes",
        "No",
        "No"
      ]
    },
    {
      criteria: "Foreign Participation",
      values: [
        "Allowed",
        "Not Allowed",
        "Allowed",
        "Not Allowed",
        "Not Allowed"
      ]
    },
    {
      criteria: "Tax Rates",
      values: [
        "Moderate",
        "Moderate",
        "High",
        "High",
        "Low"
      ]
    },
    {
      criteria: "Statutory Compliance",
      values: [
        "High",
        "Moderate",
        "Moderate",
        "Less",
        "Less"
      ]
    }
  ];

  const entityTypes = [
    "Private Limited Company",
    "One Person Company", 
    "Limited Liability Partnership",
    "Partnership Firm",
    "Proprietorship Firm"
  ];

  const getStatusIcon = (value: string) => {
    const positiveValues = ["Yes", "Allowed", "Limited", "Mandatory"];
    const negativeValues = ["No", "Not Allowed", "Unlimited", "Not mandatory"];
    
    if (positiveValues.includes(value)) {
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    } else if (negativeValues.includes(value)) {
      return <XCircle className="h-4 w-4 text-red-500" />;
    }
    return null;
  };

  const getCellBgColor = (entityIndex: number) => {
    // Highlight LLP column (index 2)
    if (entityIndex === 2) {
      return "bg-brand-primary/10 font-semibold text-brand-primary";
    }
    return "bg-white";
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
            <BarChart3 className="h-4 w-4 mr-2" />
            Business Structure Comparison
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Comparison
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Compare different business structures to make an informed decision
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 md:p-4 font-bold text-gray-900 sticky left-0 bg-gray-100 z-10 min-w-[200px]">
                        Criteria
                      </th>
                      {entityTypes.map((entity, index) => (
                        <th key={index} className={`text-center p-3 md:p-4 font-bold text-gray-900 min-w-[150px] ${
                          index === 2 ? 'bg-brand-primary text-white' : ''
                        }`}>
                          {entity}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-gray-100">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 sticky left-0 bg-white z-10 border-r border-gray-100">
                          {row.criteria}
                        </td>
                        {row.values.map((value, valueIndex) => (
                          <td key={valueIndex} className={`p-3 md:p-4 text-center text-sm ${getCellBgColor(valueIndex)}`}>
                            <div className="flex items-center justify-center space-x-2">
                              {getStatusIcon(value)}
                              <span>{value}</span>
                            </div>
                          </td>
                        ))}
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
              <span className="font-semibold text-brand-primary">Note:</span> LLP offers a balanced approach with 
              limited liability protection and moderate compliance requirements, making it ideal for small to medium businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LLPComparison;
