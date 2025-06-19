import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  COPYRIGHT_BASIC_REQUIREMENTS, 
  COPYRIGHT_DOCUMENTS_REQUIRED 
} from "@/lib/services-constants";
import { User, FileText, Upload, Award, CheckCircle } from "lucide-react";

const CopyrightRequirements = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "User":
        return <User className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />;
      case "FileText":
        return <FileText className="h-6 w-6 md:h-8 md:w-8 text-green-600" />;
      case "Upload":
        return <Upload className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />;
      case "Award":
        return <Award className="h-6 w-6 md:h-8 md:w-8 text-brand-secondary" />;
      default:
        return <FileText className="h-6 w-6 md:h-8 md:w-8 text-gray-600" />;
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Basic Requirements Section */}
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Requirements
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {COPYRIGHT_BASIC_REQUIREMENTS.title}
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              {COPYRIGHT_BASIC_REQUIREMENTS.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
            {COPYRIGHT_BASIC_REQUIREMENTS.requirements.map((requirement, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-brand-primary/10 rounded-full w-fit">
                    {getIcon(requirement.icon)}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{requirement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Documents Required Section */}
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Documentation
            </Badge>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
              Documents Required for Copyright Registration
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Ensure you have all the necessary documents ready for a smooth copyright registration process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-12">
            {COPYRIGHT_DOCUMENTS_REQUIRED.map((document, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 border-l-4 border-l-brand-secondary">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-brand-secondary/10 text-brand-secondary rounded-full flex items-center justify-center text-xs font-bold border-2 border-brand-secondary/20">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-800 text-sm font-medium leading-relaxed">{document}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Notice */}
          <div className="text-center">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-6 md:p-8">
                <div className="bg-amber-500/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Document Security & Confidentiality
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  All your creative works and documents are handled with utmost confidentiality. We follow strict security protocols to protect your intellectual property.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">Secure</div>
                    <div className="text-sm text-gray-600">Document Storage</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">Confidential</div>
                    <div className="text-sm text-gray-600">Handling Process</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">Protected</div>
                    <div className="text-sm text-gray-600">Data Transfer</div>
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

export default CopyrightRequirements;
