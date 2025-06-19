import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRADEMARK_OBJECTION_DOCUMENTS } from "@/lib/services-constants";
import { FileText, Image, Shield } from "lucide-react";

const TrademarkObjectionDocuments = () => {
  const getIcon = (index: number) => {
    const icons = [Image, FileText, Shield];
    const Icon = icons[index] || FileText;
    return <Icon className="h-6 w-6 md:h-8 md:w-8 text-brand-primary" />;
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <Badge className="bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20 mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Documentation Required
            </Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {TRADEMARK_OBJECTION_DOCUMENTS.title}
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Ensure you have all the necessary documents ready for a smooth objection reply process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {TRADEMARK_OBJECTION_DOCUMENTS.items.map((document, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-brand-primary/10 rounded-full w-fit">
                    {getIcon(index)}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{document.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{document.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-6 md:p-8">
                <div className="bg-amber-500/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Document Security & Privacy
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  All your documents are handled with utmost confidentiality and stored securely. 
                  We follow strict data protection protocols to ensure your business information remains safe.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">SSL Encrypted Uploads</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Secure Document Storage</span>
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

export default TrademarkObjectionDocuments;
