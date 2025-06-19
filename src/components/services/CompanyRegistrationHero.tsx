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
import { COMPANY_REGISTRATION_HERO, INDIAN_STATES, COMPANY_TYPES } from "@/lib/services-constants";
import { CONTACT_INFO } from "@/lib/constants";
import "@/app/animations.css";

const CompanyRegistrationHero = () => {  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state: "",
    companyType: "",
    agreeTerms: false,
    agreeComms: false,
  });
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (    <section className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-white">
      {/* Different background design */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-brand-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-40 h-40 md:w-80 md:h-80 bg-brand-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 md:left-1/3 w-16 h-16 md:w-32 md:h-32 bg-brand-primary/3 rounded-full blur-xl"></div>
        </div>
      </div>      <div className="relative z-10 container mx-auto px-4 py-2 md:py-4 lg:py-6 xl:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-120px)]">{/* Left Content */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-1">{/* Trust Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2">
              <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 px-2 md:px-3 py-1 border border-brand-primary/20 text-xs md:text-sm">
                <Building2 className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                {COMPANY_REGISTRATION_HERO.badge}
              </Badge>              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-xs md:text-sm text-gray-600 ml-1">{COMPANY_REGISTRATION_HERO.rating.score}</span>
              </div>
            </div>            {/* Main Headline */}
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                {COMPANY_REGISTRATION_HERO.title}
                <br />
                <span className="text-brand-gradient bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  {COMPANY_REGISTRATION_HERO.subtitle}
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {COMPANY_REGISTRATION_HERO.description}
              </p>
            </div>            {/* Features List */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 max-w-lg mx-auto lg:mx-0">
              {COMPANY_REGISTRATION_HERO.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 justify-center lg:justify-start bg-white/50 rounded-lg p-2 md:p-1 md:bg-transparent">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-brand-primary flex-shrink-0" />
                  <span className="text-xs md:text-base text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>{/* Pricing Info */}
            <div className="bg-brand-gradient rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 max-w-sm md:max-w-md mx-auto lg:mx-0 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <IndianRupee className="h-4 w-4 md:h-5 md:w-5 text-yellow-300" />
                    <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                      {COMPANY_REGISTRATION_HERO.pricing.consultation}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium">
                    {COMPANY_REGISTRATION_HERO.pricing.consultationLabel}
                  </div>
                  <div className="text-xs md:text-sm text-white/80">
                    {COMPANY_REGISTRATION_HERO.pricing.consultationDescription}
                  </div>
                </div>
                <Users className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-yellow-300" />
              </div>
            </div>            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:max-w-none lg:mx-0 lg:flex lg:space-x-6 lg:justify-start">
              {COMPANY_REGISTRATION_HERO.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2 bg-white/70 rounded-lg p-2 md:p-2 lg:bg-transparent lg:p-0">
                  <div className="bg-brand-primary/10 p-1.5 rounded-full">
                    {index === 0 ? (
                      <Clock className="h-3 w-3 md:h-4 md:w-4 text-brand-primary" />
                    ) : (
                      <Shield className="h-3 w-3 md:h-4 md:w-4 text-brand-primary" />
                    )}
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xs md:text-sm font-semibold text-gray-900">{indicator.title}</div>
                    <div className="text-xs text-gray-600">{indicator.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>          {/* Right Content - Consultation Form */}
          <div className="relative flex items-center justify-center order-2 lg:order-2">
            <Card className="w-full max-w-sm sm:max-w-md bg-white shadow-2xl border border-gray-100">
              <CardHeader className="text-center pb-3 md:pb-4">
                <div className="bg-brand-gradient p-2 md:p-3 rounded-full w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3">
                  <PhoneCall className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                  {COMPANY_REGISTRATION_HERO.form.title}
                </CardTitle>
                <p className="text-xs md:text-sm text-gray-600">
                  {COMPANY_REGISTRATION_HERO.form.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-3 md:space-y-4 px-4 md:px-6">
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">                  <div>
                    <Label htmlFor="name" className="text-xs md:text-sm font-medium text-gray-700">
                      {COMPANY_REGISTRATION_HERO.form.fields.name}
                    </Label>                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1 text-sm"
                      placeholder={COMPANY_REGISTRATION_HERO.form.placeholders.name}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="text-xs md:text-sm font-medium text-gray-700">
                      {COMPANY_REGISTRATION_HERO.form.fields.mobile}
                    </Label>                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      className="mt-1 text-sm"
                      placeholder={COMPANY_REGISTRATION_HERO.form.placeholders.mobile}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs md:text-sm font-medium text-gray-700">
                      {COMPANY_REGISTRATION_HERO.form.fields.email}
                    </Label>                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1 text-sm"
                      placeholder={COMPANY_REGISTRATION_HERO.form.placeholders.email}
                      required
                    />
                  </div>                  {/* Company Type and State - Horizontal on larger screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <Label htmlFor="companyType" className="text-xs md:text-sm font-medium text-gray-700">
                        {COMPANY_REGISTRATION_HERO.form.fields.companyType}
                      </Label>                      <Select onValueChange={(value) => handleInputChange("companyType", value)} required>
                        <SelectTrigger className="mt-1 text-sm">
                          <SelectValue placeholder={COMPANY_REGISTRATION_HERO.form.placeholders.companyType} />
                        </SelectTrigger>
                        <SelectContent>
                          {COMPANY_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="state" className="text-xs md:text-sm font-medium text-gray-700">
                        {COMPANY_REGISTRATION_HERO.form.fields.state}
                      </Label>                      <Select onValueChange={(value) => handleInputChange("state", value)} required>
                        <SelectTrigger className="mt-1 text-sm">
                          <SelectValue placeholder={COMPANY_REGISTRATION_HERO.form.placeholders.state} />
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
                  </div>{/* Checkboxes */}
                  <div className="space-y-2 md:space-y-3 pt-1 md:pt-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        required
                        className="mt-0.5"
                      />                      <Label
                        htmlFor="terms"
                        className="text-xs leading-relaxed cursor-pointer text-gray-600"
                      >
                        {COMPANY_REGISTRATION_HERO.form.terms.termsLabel.split(" ").map((word, index) => {
                          if (word === "Terms" || word === "&" || word === "Conditions" || word === "Privacy" || word === "Policy") {
                            return (
                              <span key={index} className="text-brand-primary underline">
                                {word}{" "}
                              </span>
                            );
                          }
                          return word + " ";
                        })}
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="comms"
                        checked={formData.agreeComms}
                        onCheckedChange={(checked) => handleInputChange("agreeComms", checked as boolean)}
                        required
                        className="mt-0.5"
                      />                      <Label
                        htmlFor="comms"
                        className="text-xs leading-relaxed cursor-pointer text-gray-600"
                      >
                        {COMPANY_REGISTRATION_HERO.form.terms.commsLabel}
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-gradient hover:opacity-90 text-white font-semibold py-2.5 md:py-3 text-sm md:text-base shadow-xl transition-all duration-300 animated-hover animated-hover-primary"
                  >
                    <PhoneCall className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    {COMPANY_REGISTRATION_HERO.form.button}
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-2 md:mt-3">
                  {COMPANY_REGISTRATION_HERO.form.note}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyRegistrationHero;
