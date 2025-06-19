import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRADEMARK_ASSIGNMENT_BENEFITS } from "@/lib/services-constants";
import { Shield, TrendingUp, Globe, Lightbulb, Lock, Award } from "lucide-react";

const TrademarkAssignmentBenefits = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />;
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-green-600" />;
      case "Globe":
        return <Globe className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />;
      case "Lightbulb":
        return <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-yellow-600" />;
      case "Lock":
        return <Lock className="h-6 w-6 md:h-8 md:w-8 text-red-600" />;
      case "Award":
        return <Award className="h-6 w-6 md:h-8 md:w-8 text-brand-secondary" />;
      default:
        return <Shield className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />;
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <Award className="h-4 w-4 mr-2" />
              Why Choose Us?
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Why Choose Us?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of choosing our trademark assignment services for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TRADEMARK_ASSIGNMENT_BENEFITS.map((benefit, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-brand-primary font-medium mb-3">{benefit.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
              <CardContent className="p-6 md:p-8">
                <div className="bg-brand-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Ready to Transfer Your Trademark?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our expert team is ready to assist you with a seamless trademark assignment process. Contact us today to get started.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Expert</div>
                    <div className="text-sm text-gray-600">Legal Assistance</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Secure</div>
                    <div className="text-sm text-gray-600">Transfer Process</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">Complete</div>
                    <div className="text-sm text-gray-600">Documentation</div>
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

export default TrademarkAssignmentBenefits;
