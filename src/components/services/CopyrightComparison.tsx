import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { COPYRIGHT_COMPARISON_TABLE } from "@/lib/services-constants";
import { Scale, CheckCircle, XCircle, Phone } from "lucide-react";

const CopyrightComparison = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-brand-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4 px-4 py-2">
              <Scale className="h-4 w-4 mr-2" />
              Comparison Guide
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {COPYRIGHT_COMPARISON_TABLE.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understand the key differences between Copyright, Trademark, and Patent to choose the right protection for your intellectual property.
            </p>
          </div>          {/* Enhanced Table Card */}
          <Card className="shadow-2xl border-2 border-brand-primary/20 overflow-hidden mb-8 bg-white">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table className="border-collapse"><TableHeader>
                    <TableRow className="bg-brand-primary border-b-4 border-brand-secondary">                      {COPYRIGHT_COMPARISON_TABLE.headers.map((header, index) => (
                        <TableHead 
                          key={index} 
                          className={`font-extrabold text-white text-center py-6 px-4 text-xl ${
                            index === 0 
                              ? 'w-32 text-left bg-brand-primary text-white' 
                              : 'min-w-64 bg-brand-primary hover:bg-brand-primary/90 transition-colors'
                          }`}
                        >
                          {index === 0 ? (
                            <span className="font-extrabold text-xl tracking-wider uppercase">{header}</span>
                          ) : (
                            <div className="flex flex-col items-center justify-center gap-1">
                              {index === 1 && <span className="text-3xl font-bold">©</span>}
                              {index === 2 && <span className="text-3xl font-bold">™</span>}
                              {index === 3 && <span className="text-3xl font-bold">℗</span>}
                              <span className="font-extrabold text-lg tracking-wider uppercase">{header}</span>
                            </div>
                          )}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {COPYRIGHT_COMPARISON_TABLE.rows.map((row, index) => (
                      <TableRow 
                        key={index} 
                        className={`hover:bg-brand-primary/5 transition-all duration-300 ${
                          index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                        }`}
                      >                        <TableCell className="font-bold text-white bg-brand-primary py-4 px-4 border-r-2 border-brand-secondary/30">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-white rounded-full mr-3 opacity-80"></div>
                            <span className="text-sm font-extrabold tracking-wide">{row.basis}</span>
                          </div>
                        </TableCell><TableCell className="text-sm text-gray-700 leading-relaxed py-4 px-4">
                          <div className="space-y-1">
                            {row.copyright.split('.').filter(text => text.trim()).map((text, i) => (
                              <div key={i} className="flex items-start">
                                <CheckCircle className="h-3 w-3 text-brand-primary mt-1 mr-2 flex-shrink-0" />
                                <span>{text.trim()}</span>
                              </div>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-700 leading-relaxed py-4 px-4">
                          <div className="space-y-1">
                            {row.trademark.split('.').filter(text => text.trim()).map((text, i) => (
                              <div key={i} className="flex items-start">
                                <CheckCircle className="h-3 w-3 text-brand-secondary mt-1 mr-2 flex-shrink-0" />
                                <span>{text.trim()}</span>
                              </div>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-700 leading-relaxed py-4 px-4">
                          <div className="space-y-1">
                            {row.patent.split('.').filter(text => text.trim()).map((text, i) => (
                              <div key={i} className="flex items-start">
                                <CheckCircle className="h-3 w-3 text-brand-primary/70 mt-1 mr-2 flex-shrink-0" />
                                <span>{text.trim()}</span>
                              </div>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CopyrightComparison;
