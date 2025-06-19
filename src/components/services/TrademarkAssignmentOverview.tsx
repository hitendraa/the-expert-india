import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRADEMARK_ASSIGNMENT_OVERVIEW } from "@/lib/services-constants";
import { FileText, Shield } from "lucide-react";

const TrademarkAssignmentOverview = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Understanding Assignment
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {TRADEMARK_ASSIGNMENT_OVERVIEW.title}
            </h2>
          </div>

          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                {TRADEMARK_ASSIGNMENT_OVERVIEW.description}
              </p>
              
              {TRADEMARK_ASSIGNMENT_OVERVIEW.details.map((detail, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {detail}
                </p>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-primary/5 to-brand-primary/10">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Assignment Process
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experts handle the complete assignment documentation process to ensure seamless transfer of trademark ownership.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-secondary/5 to-brand-secondary/10">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="bg-brand-secondary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-brand-secondary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Legal Protection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensure all legal formalities are completed correctly to maintain the validity and enforceability of your trademark rights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrademarkAssignmentOverview;
