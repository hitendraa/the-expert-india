import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRADEMARK_OBJECTION_REASONS } from "@/lib/services-constants";
import { AlertTriangle } from "lucide-react";

const TrademarkObjectionOverview = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Common Objection Reasons
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {TRADEMARK_OBJECTION_REASONS.title}
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Understanding the common reasons for trademark objections helps in preparing better responses and avoiding future issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {TRADEMARK_OBJECTION_REASONS.items.map((reason, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center text-sm font-bold border-2 border-brand-primary/20">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium leading-relaxed">{reason}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
              <CardContent className="p-6 md:p-8">
                <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Expert Assistance Available
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our trademark experts have successfully handled thousands of objection replies with a high success rate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">5-10</div>
                    <div className="text-sm text-gray-600">Working Days</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">10,000+</div>
                    <div className="text-sm text-gray-600">Cases Handled</div>
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

export default TrademarkObjectionOverview;
