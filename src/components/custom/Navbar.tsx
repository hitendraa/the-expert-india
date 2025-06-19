"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Building2,
  FileText,
  CreditCard,
  Scale,
  Users,
  Star,
  Award,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MAIN_NAVIGATION, QUICK_LINKS } from "@/lib/constants"
import Topbar from "./Topbar"
import "@/app/animations.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getServiceIcon = (title: string) => {
    switch (title) {
      case "Company Registration":
        return <Building2 className="h-4 w-4 xl:h-5 xl:w-5 text-brand-primary group-hover:text-white transition-colors" />
      case "Trademark":
        return <Shield className="h-4 w-4 xl:h-5 xl:w-5 text-brand-secondary group-hover:text-white transition-colors" />
      case "Licenses":
        return <FileText className="h-4 w-4 xl:h-5 xl:w-5 text-brand-primary group-hover:text-white transition-colors" />
      case "GST Services":
        return <CreditCard className="h-4 w-4 xl:h-5 xl:w-5 text-brand-secondary group-hover:text-white transition-colors" />
      case "Tax & Compliance":
        return <Scale className="h-4 w-4 xl:h-5 xl:w-5 text-brand-primary group-hover:text-white transition-colors" />
      default:
        return <Users className="h-4 w-4 xl:h-5 xl:w-5 text-gray-600 group-hover:text-white transition-colors" />
    }
  }

  const getServiceImage = (title: string) => {
    const imageMap: { [key: string]: string } = {
      "Company Registration": "/images/services/company-registration.png",
      "Trademark": "/images/services/trademark.png", 
      "Licenses": "/images/services/licenses.png",
      "GST Services": "/images/services/gst-services.png",
      "Tax & Compliance": "/images/services/tax-compliance.png",
    }
    return imageMap[title] || "/images/1.png"
  }

  return (
    <>
      <Topbar />      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-brand-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="bg-brand-gradient p-1.5 md:p-2 rounded-lg">
                <Scale className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gray-900">Expert Legal</span>
                <span className="text-xs md:text-sm text-brand-primary font-medium">India</span>
              </div>
            </Link>            {/* Desktop Navigation */}
            <NavigationMenu className="hidden xl:flex">
              <NavigationMenuList className="space-x-1">
                {MAIN_NAVIGATION.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="group bg-transparent hover:bg-brand-primary hover:text-white data-[state=open]:bg-brand-primary/10 data-[state=open]:text-brand-primary text-gray-700 transition-colors text-sm">
                          <span className="flex items-center space-x-1.5">
                            {getServiceIcon(item.title)}
                            <span>{item.title}</span>
                          </span>
                        </NavigationMenuTrigger>                        <NavigationMenuContent>
                          <div className="grid w-[500px] lg:w-[600px] grid-cols-2 gap-3 p-4 lg:p-6">
                            {/* 🖼️ Background image block with Next.js Image */}
                            <div className="row-span-3">
                              <div className="relative flex h-full w-full select-none flex-col justify-end rounded-md overflow-hidden p-4 lg:p-6 no-underline outline-none focus:shadow-md">
                                {/* Next.js Image Background */}
                                <Image
                                  src={getServiceImage(item.title)}
                                  alt={`${item.title} background`}
                                  fill
                                  className="object-cover object-center"
                                  priority
                                />
                                
                                {/* Dark overlay for better text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                                  {/* Content over image */}
                                <div className="relative z-20 text-white">
                                  <div className="mb-4 [&>svg]:text-white">
                                    {getServiceIcon(item.title)}
                                  </div>
                                  <div className="mb-2 mt-4 text-sm lg:text-lg font-medium">
                                    {item.title}
                                  </div>
                                  <p className="text-xs lg:text-sm leading-tight text-gray-100">
                                    {item.title === "Company Registration" && "Register your business with government compliance"}
                                    {item.title === "Trademark" && "Protect your brand identity and intellectual property"}
                                    {item.title === "Licenses" && "Get all required licenses for your business operations"}
                                    {item.title === "GST Services" && "Complete GST registration and compliance solutions"}
                                    {item.title === "Tax & Compliance" && "Professional tax filing and compliance services"}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="grid gap-2">
                              {item.items.map((service) => (
                                <NavigationMenuLink key={service.name} asChild>
                                  <Link
                                    href={service.href}
                                    className="group block select-none space-y-1 rounded-md p-2 lg:p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-primary hover:text-white focus:bg-brand-primary focus:text-white"
                                  >
                                    <div className="text-xs lg:text-sm font-medium leading-none">
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
                      </>                    ) : (                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-primary hover:text-white focus:bg-brand-primary focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          <Users className="h-4 w-4 mr-2 text-brand-primary group-hover:text-white transition-colors" />
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center space-x-2 xl:space-x-3">
              <div className="hidden 2xl:flex flex-col text-right">
                <span className="text-xs text-gray-500">Need Help?</span>
                <span className="text-xs font-semibold text-brand-primary">1 Lakh+ Happy Clients</span>
              </div>
              <Button className="bg-brand-gradient hover:opacity-90 text-white font-medium px-3 xl:px-6 py-2 text-xs xl:text-sm shadow-lg hover:shadow-xl transition-all duration-300 animated-hover animated-hover-primary">
                <Phone className="h-3 w-3 xl:h-4 xl:w-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Get Free Consultation</span>
                <span className="xl:hidden">Call Now</span>
              </Button>
            </div>

            {/* Tablet Navigation - Simplified for medium screens */}
            <div className="hidden lg:xl:hidden items-center space-x-2">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {MAIN_NAVIGATION.slice(0, 3).map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="group bg-transparent hover:bg-brand-primary hover:text-white data-[state=open]:bg-brand-primary/10 data-[state=open]:text-brand-primary text-gray-700 transition-colors text-xs px-2 py-1.5">
                        <span className="flex items-center space-x-1">
                          {getServiceIcon(item.title)}
                          <span className="text-xs">{item.title.split(' ')[0]}</span>
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[300px] grid-cols-1 gap-2 p-3">
                          {item.items?.map((service) => (
                            <NavigationMenuLink key={service.name} asChild>
                              <Link
                                href={service.href}
                                className="group block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-brand-primary hover:text-white focus:bg-brand-primary focus:text-white"
                              >
                                <div className="text-xs font-medium leading-none">
                                  {service.name}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile/Tablet Actions */}
            <div className="flex xl:hidden items-center space-x-2">
              <Button 
                size="sm"
                className="bg-brand-gradient hover:opacity-90 text-white font-medium px-3 py-2 text-xs shadow-lg transition-all duration-300 animated-hover animated-hover-primary"
              >
                <Phone className="h-3 w-3 mr-1.5" />
                Call Now
              </Button>
                {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                    <Menu className="h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </SheetTrigger>                <SheetContent side="right" className="w-[320px] sm:w-[360px] md:w-[400px] p-0 bg-white border-l border-gray-200 shadow-2xl">
                  {/* Header Section */}
                  <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-brand-gradient p-2 rounded-lg shadow-md">
                          <Scale className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-lg md:text-xl font-bold text-gray-900">Expert Legal</span>
                          <span className="text-xs md:text-sm text-brand-primary font-medium">India</span>
                        </div>
                      </div>
                      <div className="bg-green-50 px-2 py-1 rounded-full">
                        <span className="text-xs font-semibold text-green-700">24/7 Available</span>
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
                                  <span className="font-semibold text-gray-900 text-sm md:text-base">{item.title}</span>
                                  <span className="text-xs text-gray-500">{item.items?.length || 0} services</span>
                                </div>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                <span className="text-xs font-bold text-brand-primary">{index + 1}</span>
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
                                      <span className="text-xs font-medium text-gray-600 group-hover/item:text-white">{serviceIndex + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-gray-900 group-hover/item:text-white transition-colors">
                                        {service.name}
                                      </div>
                                      <div className="text-xs text-gray-500 group-hover:item:text-white/80 transition-colors">
                                        Professional {service.name.toLowerCase()} services
                                      </div>
                                    </div>
                                    <div className="opacity-0 group-hover:item:opacity-100 transition-opacity">
                                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Quick Links Section */}-
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
                            <span>1 Lakh+ Happy Clients</span>
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
                    <Button className="w-full bg-brand-gradient hover:opacity-90 text-white font-semibold py-3 text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animated-hover animated-hover-primary">
                      <Phone className="h-4 w-4 mr-2" />
                      Get Free Consultation Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Call us now for immediate assistance
                    </p>
                  </div>
                </SheetContent>
              </Sheet>            </div>
          </div>
        </div>
      </header>
    </>
  )

}

export default Navbar
