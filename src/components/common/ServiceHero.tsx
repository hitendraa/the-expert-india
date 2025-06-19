"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle,
  Phone,
  Star,
  ArrowRight,
  Users,
  Shield,
  Clock,
  Award,
  Building2,
  IndianRupee,
  FileText,
  PhoneCall,
} from "lucide-react";
import { INDIAN_STATES } from "@/lib/services-constants";
import { CONTACT_INFO } from "@/lib/constants";
import "@/app/animations.css";

interface ServiceHeroProps {
  heroData: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    rating: {
      score: string;
      reviews: string;
    };
    features: string[];
    pricing: {
      consultation: string;
      consultationLabel: string;
      consultationDescription: string;
    };
    trustIndicators: Array<{
      title: string;
      subtitle: string;
    }>;
    form: {
      title: string;
      subtitle: string;      fields: {
        name: string;
        mobile: string;
        email: string;
        state: string;
        companyType?: string;
        trademarkType?: string;
        hearAbout?: string;
        package?: string;
        city?: string;
      };
      placeholders: {
        name: string;
        mobile: string;
        email: string;
        companyType?: string;
        trademarkType?: string;
        hearAbout?: string;
        package?: string;
        state: string;
        city?: string;
      };
      button: string;
      note: string;
      terms: {
        termsLabel: string;
        commsLabel: string;
      };
    };
  };  selectOptions?: string[];
  selectFieldType?: 'companyType' | 'trademarkType' | 'hearAbout' | 'package';
}

const ServiceHero = ({ heroData, selectOptions, selectFieldType }: ServiceHeroProps) => {  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    ...(selectFieldType && { [selectFieldType]: "" }),
    agreeTerms: false,
    agreeComms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <section className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-2 md:py-4 lg:py-6 xl:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-120px)]">
          {/* Left Column - Content */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-1">
            {/* Badge */}
            <div className="animated-fade-in-up">
              <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 px-2 md:px-3 py-1 border border-brand-primary/20 text-xs md:text-sm">
                <Award className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                {heroData.badge}
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 md:space-y-3 lg:space-y-4 animated-fade-in-up animation-delay-100">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                {heroData.title}
                <br />
                <span className="text-brand-gradient bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  {heroData.subtitle}
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {heroData.description}
              </p>
            </div>

            {/* Rating */}
            <div className="animated-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 justify-center lg:justify-start">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xs md:text-sm">
                  <span className="font-bold text-gray-900">{heroData.rating.score}</span>
                  <span className="text-gray-600 ml-1">{heroData.rating.reviews}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="animated-fade-in-up animation-delay-300">
              <div className="grid grid-cols-2 gap-2 md:gap-3 max-w-lg mx-auto lg:mx-0">
                {heroData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 justify-center lg:justify-start bg-white/50 rounded-lg p-2 md:p-1 md:bg-transparent">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-brand-primary flex-shrink-0" />
                    <span className="text-xs md:text-base text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="animated-fade-in-up animation-delay-400">
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
                {heroData.trustIndicators.map((indicator, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="font-bold text-brand-primary text-sm md:text-lg">
                      {indicator.title}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {indicator.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="animated-fade-in-up animation-delay-500">
              <div className="bg-brand-gradient rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 max-w-sm md:max-w-md mx-auto lg:mx-0 text-white">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 md:p-3 rounded-full">
                    <IndianRupee className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl lg:text-2xl font-bold">{heroData.pricing.consultation}</div>
                    <div className="text-xs md:text-sm opacity-90">{heroData.pricing.consultationLabel}</div>
                    <div className="text-xs opacity-75">{heroData.pricing.consultationDescription}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>          {/* Right Column - Form */}
          <div className="animated-fade-in-up animation-delay-300 order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <Card className="w-full max-w-sm sm:max-w-md shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <div className="bg-brand-primary/10 p-2 rounded-full w-fit mx-auto mb-2">
                    <PhoneCall className="h-5 w-5 text-brand-primary" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900">
                    {heroData.form.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    {heroData.form.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-3 px-4 pb-4">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Name */}
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-xs font-medium text-gray-700">
                        {heroData.form.fields.name}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={heroData.form.placeholders.name}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="h-9 text-sm"
                        required
                      />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1">
                      <Label htmlFor="mobile" className="text-xs font-medium text-gray-700">
                        {heroData.form.fields.mobile}
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder={heroData.form.placeholders.mobile}
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        className="h-9 text-sm"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs font-medium text-gray-700">
                        {heroData.form.fields.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={heroData.form.placeholders.email}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-9 text-sm"
                        required
                      />
                    </div>                    {/* State */}
                    <div className="space-y-1">
                      <Label htmlFor="state" className="text-xs font-medium text-gray-700">
                        {heroData.form.fields.state}
                      </Label>
                      <Select 
                        value={formData.state} 
                        onValueChange={(value) => handleInputChange('state', value)}
                      >
                        <SelectTrigger className="h-9 text-sm">
                          <SelectValue placeholder={heroData.form.placeholders.state} />
                        </SelectTrigger>
                        <SelectContent>
                          {INDIAN_STATES.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* City (Conditional) */}
                    {heroData.form.fields.city && (
                      <div className="space-y-1">
                        <Label htmlFor="city" className="text-xs font-medium text-gray-700">
                          {heroData.form.fields.city}
                        </Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder={heroData.form.placeholders.city}
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="h-9 text-sm"
                        />
                      </div>
                    )}                    {/* Dynamic Select Field */}
                    {selectFieldType && selectOptions && (
                    <div className="space-y-1">
                      <Label htmlFor={selectFieldType} className="text-xs font-medium text-gray-700">
                        {selectFieldType === 'companyType' 
                          ? heroData.form.fields.companyType 
                          : selectFieldType === 'trademarkType'
                          ? heroData.form.fields.trademarkType
                          : selectFieldType === 'hearAbout'
                          ? heroData.form.fields.hearAbout
                          : heroData.form.fields.package}
                      </Label>
                      <Select 
                        value={(formData as any)[selectFieldType] || ""} 
                        onValueChange={(value) => handleInputChange(selectFieldType, value)}
                      >
                        <SelectTrigger className="h-9 text-sm">
                          <SelectValue placeholder={
                            selectFieldType === 'companyType' 
                              ? heroData.form.placeholders.companyType 
                              : selectFieldType === 'trademarkType'                              ? heroData.form.placeholders.trademarkType
                              : selectFieldType === 'hearAbout'
                              ? heroData.form.placeholders.hearAbout
                              : heroData.form.placeholders.package
                          } />
                        </SelectTrigger>
                        <SelectContent>
                          {selectOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    )}

                    {/* Terms and Conditions */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                          className="mt-0.5"
                          required
                        />
                        <Label htmlFor="agreeTerms" className="text-xs text-gray-600 leading-relaxed">
                          {heroData.form.terms.termsLabel}
                        </Label>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeComms"
                          checked={formData.agreeComms}
                          onCheckedChange={(checked) => handleInputChange('agreeComms', checked as boolean)}
                          className="mt-0.5"
                        />
                        <Label htmlFor="agreeComms" className="text-xs text-gray-600 leading-relaxed">
                          {heroData.form.terms.commsLabel}
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full h-10 bg-brand-gradient text-white font-semibold text-sm hover:opacity-90 transition-all duration-300"
                      disabled={!formData.agreeTerms}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {heroData.form.button}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    {/* Note */}
                    <p className="text-center text-xs text-gray-500 mt-2">
                      {heroData.form.note}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
