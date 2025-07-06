"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, Download } from "lucide-react";
import { COMPANY_COMPARISON_TABLE } from "@/lib/services-constants";
import CTA from "@/components/common/CTA";
import "@/app/animations.css";

const CompanyComparison = () => {
  const handleDownloadComparison = () => {
    // Create comparison table content as CSV
    const csvContent = [
      COMPANY_COMPARISON_TABLE.headers.join(','),
      ...COMPANY_COMPARISON_TABLE.rows.map(row => 
        [row.feature, ...row.values].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Business-Structure-Comparison-Chart.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="company-comparison" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
            <BarChart3 className="h-4 w-4 mr-2" />
            Comparison Guide
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            {COMPANY_COMPARISON_TABLE.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {COMPANY_COMPARISON_TABLE.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="shadow-lg border-0 overflow-hidden mb-8">
          <CardHeader className="bg-brand-gradient text-white text-center py-4">
            <CardTitle className="text-lg md:text-xl font-bold">
              Business Structure Comparison Matrix
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    {COMPANY_COMPARISON_TABLE.headers.map((header, index) => (
                      <TableHead key={index} className="font-bold text-gray-900 text-center">
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {COMPANY_COMPARISON_TABLE.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex} className="hover:bg-gray-50">
                      <TableCell className="font-semibold text-gray-900 bg-gray-50">
                        {row.feature}
                      </TableCell>
                      {row.values.map((value, valueIndex) => (
                        <TableCell key={valueIndex} className="text-center">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            value === "Yes" || value === "Allowed" || value === "Mandatory" || value === "Limited"
                              ? "bg-green-100 text-green-800"
                              : value === "No" || value === "Not Allowed" || value === "Not Required" || value === "Unlimited"
                              ? "bg-red-100 text-red-800"
                              : value === "Optional" || value === "Conditional"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {value}
                          </span>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden p-4 space-y-4">
              {COMPANY_COMPARISON_TABLE.headers.slice(1).map((companyType, typeIndex) => (
                <Card key={typeIndex} className="shadow-md border border-gray-200">
                  <CardHeader className="bg-brand-primary/5 py-3">
                    <CardTitle className="text-base font-bold text-center text-gray-900">
                      {companyType}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3">
                    <div className="space-y-2">
                      {COMPANY_COMPARISON_TABLE.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-700 text-xs">
                            {row.feature}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            row.values[typeIndex] === "Yes" || row.values[typeIndex] === "Allowed" || row.values[typeIndex] === "Mandatory" || row.values[typeIndex] === "Limited"
                              ? "bg-green-100 text-green-800"
                              : row.values[typeIndex] === "No" || row.values[typeIndex] === "Not Allowed" || row.values[typeIndex] === "Not Required" || row.values[typeIndex] === "Unlimited"
                              ? "bg-red-100 text-red-800"
                              : row.values[typeIndex] === "Optional" || row.values[typeIndex] === "Conditional"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {row.values[typeIndex]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="mb-8 flex justify-center">
          <Button 
            onClick={handleDownloadComparison}
            className="bg-brand-gradient hover:opacity-90 text-white px-6 py-2 animated-hover animated-hover-primary"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Comparison Chart
          </Button>
        </div>        {/* CTA */}
        <CTA
          title="Need Expert Guidance on Business Structure?"
          description="Our legal experts will analyze your business requirements and recommend the most suitable company structure for your specific needs and goals."
          primaryButton="Get Expert Advice"
          secondaryButton="Schedule Consultation"
          secondaryButtonHref="https://wa.me/917023314773?text=Hi, I would like to schedule a consultation"
          badge="Expert Analysis"
          variant="gradient"
          size="compact"
        />
      </div>
    </section>
  );
};

export default CompanyComparison;
