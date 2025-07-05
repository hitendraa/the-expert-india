"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Shield,
  Building2,
  FileText,
  CreditCard,
  Scale,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MAIN_NAVIGATION, QUICK_LINKS } from "@/lib/constants";
import Topbar from "./Topbar";
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to get service icons
  const getServiceIcon = (title: string) => {
    switch (title) {
      case "Company Registration":
        return <Building2 className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "Trademark":
        return <Shield className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      case "Income Tax & Compliance":
        return <Scale className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "GST":
        return <CreditCard className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      case "Food License":
        return <FileText className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "Business Registration":
        return <Building2 className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      case "Loan":
        return <CreditCard className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />;
      case "Insurance":
        return <Shield className="h-4 w-4 text-brand-secondary group-hover:text-white transition-colors" />;
      default:
        return <Building2 className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />;
    }
  };

  // Helper function to get service images
  const getServiceImage = (title: string) => {
    const imageMap: { [key: string]: string } = {
      "Company Registration": "/images/services/company-registration.png",
      Trademark: "/images/services/trademark.png",
      "Income Tax & Compliance": "/images/services/tax-compliance.png",
      GST: "/images/services/gst-services.png",
      "Food License": "/images/services/licenses.png",
      "Business Registration": "/images/services/company-registration.png",
      Loan: "/images/services/gst-services.png",
      Insurance: "/images/services/licenses.png",
    };
    return imageMap[title] || "/images/img.png";
  };

  return (
    <>
      <Topbar />
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-brand-primary/10 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-dark.png"
                alt="Expert India Consultancy"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center max-w-6xl mx-4">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {MAIN_NAVIGATION.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.items ? (
                        <>
                          <NavigationMenuTrigger className="group bg-transparent hover:bg-brand-primary hover:text-white data-[state=open]:bg-brand-primary/10 data-[state=open]:text-brand-primary text-gray-700 transition-colors text-sm px-3 py-2 rounded-md flex items-center space-x-2">
                            {getServiceIcon(item.title)}
                            <span className="whitespace-nowrap text-sm">
                              {item.title}
                            </span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className={cn(
                              "grid gap-3 p-6",
                              item.title === "Business Registration" 
                                ? "w-[700px] grid-cols-3" 
                                : "w-[500px] grid-cols-2"
                            )}>
                              {/* Background image column */}
                              <div className="row-span-3">
                                <div className="relative flex h-full w-full select-none flex-col justify-end rounded-md overflow-hidden p-6 no-underline outline-none focus:shadow-md min-h-[200px]">
                                  <Image
                                    src={getServiceImage(item.title)}
                                    alt={`${item.title} background`}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                                  <div className="relative z-20 text-white">
                                    <div className="mb-4 [&>svg]:text-white">
                                      {getServiceIcon(item.title)}
                                    </div>
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                      {item.title}
                                    </div>
                                    <p className="text-sm leading-tight text-gray-100">
                                      {item.title === "Company Registration" && "Register your business with government compliance"}
                                      {item.title === "Trademark" && "Protect your brand identity and intellectual property"}
                                      {item.title === "Food License" && "Get all required food safety licenses"}
                                      {item.title === "GST" && "Complete GST registration and compliance solutions"}
                                      {item.title === "Income Tax & Compliance" && "Professional tax filing and compliance services"}
                                      {item.title === "Business Registration" && "MSME, import-export, and business setup services"}
                                      {item.title === "Loan" && "Personal, business, and specialized loan services"}
                                      {item.title === "Insurance" && "Life, health, vehicle, and business insurance"}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Services Grid */}
                              <div className={cn(
                                "grid gap-2",
                                item.title === "Business Registration" ? "grid-cols-2 col-span-2" : ""
                              )}>
                                {item.items.map((service) => (
                                  <NavigationMenuLink key={service.name} asChild>
                                    <Link
                                      href={service.href}
                                      className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-primary hover:text-white focus:bg-brand-primary focus:text-white"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {service.name}
                                      </div>
                                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-white/80">
                                        Professional {service.name.toLowerCase()} services
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            href="#"
                            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-primary hover:text-white focus:bg-brand-primary focus:text-white focus:outline-none"
                          >
                            {getServiceIcon(item.title)}
                            <span className="ml-2">{item.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <GoogleAuthButton />
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <GoogleAuthButton />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                    <Menu className="h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[320px] sm:w-[360px] md:w-[400px] p-0 bg-white border-l border-gray-200 shadow-2xl"
                >
                  {/* Header Section */}
                  <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src="/logo-dark.png"
                          alt="Expert India Consultancy"
                          width={120}
                          height={35}
                          className="h-6 md:h-8 w-auto"
                          priority
                        />
                      </div>
                      <div className="bg-green-50 px-2 py-1 rounded-full">
                        <span className="text-xs font-semibold text-green-700">
                          24/7 Available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="h-[calc(100vh-140px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="px-6 py-4 space-y-6">
                      {/* Navigation Items */}
                      <div className="space-y-4">
                        {MAIN_NAVIGATION.map((item, index) => (
                          <div key={item.title} className="group">
                            {/* Main Category */}
                            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:from-brand-primary/5 hover:to-brand-secondary/5 hover:border-brand-primary/20 transition-all duration-300">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                  {getServiceIcon(item.title)}
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                                    {item.title}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {item.items?.length || 0} services
                                  </span>
                                </div>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                <span className="text-xs font-bold text-brand-primary">
                                  {index + 1}
                                </span>
                              </div>
                            </div>

                            {/* Sub Items */}
                            {item.items && (
                              <div className="mt-3 ml-4 space-y-2">
                                {item.items.map((service, serviceIndex) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-brand-primary hover:text-white group/item transition-all duration-300 border border-transparent hover:border-brand-primary/20 hover:shadow-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="w-6 h-6 rounded-full bg-gray-100 group-hover/item:bg-white/20 flex items-center justify-center transition-colors">
                                      <span className="text-xs font-medium text-gray-600 group-hover/item:text-white">
                                        {serviceIndex + 1}
                                      </span>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-gray-900 group-hover/item:text-white transition-colors">
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-gray-500 group-hover/item:text-white/80 transition-colors">
                                        Professional {service.name.toLowerCase()} services
                                      </div>
                                    </div>
                                    <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                      <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </svg>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Quick Links Section */}
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-brand-primary rounded-full mr-2"></div>
                          Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {QUICK_LINKS.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="p-3 rounded-lg border border-gray-200 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 group"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="text-xs font-medium text-gray-900 group-hover:text-brand-primary transition-colors">
                                {link.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-4 text-white">
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          Get Instant Help
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Expert India Team</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>15+ Years Experience</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>99.8% Success Rate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
                    <Button className="w-full bg-brand-gradient hover:opacity-90 text-white font-semibold py-3 text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                      <Phone className="h-4 w-4 mr-2" />
                      Get Free Consultation Now
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Call us now for immediate assistance
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
