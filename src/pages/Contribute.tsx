
import React from 'react';
import { ArrowRight, ShoppingCart, Package, CheckCircle, Shield, Heart, CreditCard, Truck, Share2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contribute = () => {
  const steps = [
    {
      step: 1,
      title: "Click to Start Contributing",
      description: "Click the button below to be redirected to our Amazon wishlist",
      icon: <ShoppingCart className="w-6 h-6" />,
      action: "START CONTRIBUTING"
    },
    {
      step: 2,
      title: "Browse Amazon Product List",
      description: "View the curated list of essential items added by DCPW Trust",
      icon: <Package className="w-6 h-6" />,
      action: "VIEW PRODUCTS"
    },
    {
      step: 3,
      title: "Select Items to Contribute",
      description: "Add products from the list that you want to contribute to your cart",
      icon: <CheckCircle className="w-6 h-6" />,
      action: "ADD TO CART"
    },
    {
      step: 4,
      title: "Complete Secure Payment",
      description: "Pay online using prepaid methods only - COD is not available",
      icon: <CreditCard className="w-6 h-6" />,
      action: "MAKE PAYMENT"
    },
    {
      step: 5,
      title: "Direct Delivery to Trust",
      description: "Items will be delivered directly to DCPW Trust premises",
      icon: <Truck className="w-6 h-6" />,
      action: "DELIVERY"
    },
    {
      step: 6,
      title: "Your Impact Shared",
      description: "Your contribution will be showcased on our social media platforms",
      icon: <Share2 className="w-6 h-6" />,
      action: "SOCIAL IMPACT"
    }
  ];

  const essentialItems = [
    { 
      name: "Food Packages", 
      price: "$25", 
      description: "Nutritious meals for a family of 4",
      gradient: "from-orange-400 to-red-500"
    },
    { 
      name: "School Supplies", 
      price: "$15", 
      description: "Books, pens, and educational materials",
      gradient: "from-blue-400 to-indigo-500"
    },
    { 
      name: "Medical Kits", 
      price: "$35", 
      description: "First aid and basic medical supplies",
      gradient: "from-green-400 to-emerald-500"
    },
    { 
      name: "Clean Water Filters", 
      price: "$45", 
      description: "Portable water purification systems",
      gradient: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Blankets & Clothing", 
      price: "$20", 
      description: "Warm clothing and bedding",
      gradient: "from-purple-400 to-pink-500"
    },
    { 
      name: "Hygiene Kits", 
      price: "$12", 
      description: "Soap, toothbrush, and personal care items",
      gradient: "from-teal-400 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-[#1F827C] hover:text-[#166b60] transition-colors group">
              <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <Badge variant="outline" className="bg-[#1F827C]/10 text-[#1F827C] border-[#1F827C]/20 font-medium">
              <Shield className="w-3 h-3 mr-1" />
              Secure Contributions
            </Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-24">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-[#1F827C] to-emerald-600 rounded-2xl shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Contribute Essential Items
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1F827C] to-emerald-600 mt-2">
              with Complete Trust
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Help communities in need by purchasing essential items through our secure Amazon partnership
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-sm font-medium">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-[#1F827C]" />
              <span className="text-slate-700">100% Secure</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-slate-700">Direct Impact</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-slate-700">Full Transparency</span>
            </div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-4">
            How to Contribute in 6 Simple Steps
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Follow our streamlined process to make your contribution count
          </p>
          
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#1F827C] to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#1F827C]/30 to-transparent"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-[#1F827C] mr-3 p-2 bg-[#1F827C]/10 rounded-lg">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                      <Badge className="bg-gradient-to-r from-[#1F827C] to-emerald-600 text-white text-xs font-medium">
                        {step.action}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Grid for 6 items */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#1F827C] to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < 2 && (
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-[#1F827C]/30 to-transparent"></div>
                  )}
                  {index === 2 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#1F827C]/30 to-transparent"></div>
                  )}
                  {index > 2 && index < 5 && (
                    <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-[#1F827C]/30 to-transparent"></div>
                  )}
                </div>
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-56 flex flex-col w-full group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="text-[#1F827C] mb-4 flex justify-center p-3 bg-[#1F827C]/10 rounded-xl w-fit mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">{step.description}</p>
                    <Badge className="bg-gradient-to-r from-[#1F827C] to-emerald-600 text-white text-xs self-center font-medium">
                      {step.action}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Reverse arrow for step 6 */}
            <div className="col-start-3 row-start-2 flex justify-center">
              <div className="w-0.5 h-8 bg-gradient-to-t from-[#1F827C]/30 to-transparent -mt-16"></div>
            </div>
          </div>
        </div>

        {/* Start Contributing Button */}
        <div className="text-center mb-20">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#1F827C] to-emerald-600 hover:from-[#166b60] hover:to-emerald-700 text-white px-10 py-6 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl"
          >
            <ShoppingCart className="w-6 h-6 mr-3" />
            Start Contributing on Amazon
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>

        {/* Essential Items Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-4">
            Essential Items We Need
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Every item makes a difference in someone's life
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {essentialItems.map((item, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <CardHeader className="pb-4 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="flex justify-between items-start relative">
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-[#1F827C] transition-colors">
                      {item.name}
                    </CardTitle>
                    <Badge variant="outline" className="bg-gradient-to-r from-[#1F827C] to-emerald-600 text-white border-0 font-bold text-sm px-3 py-1">
                      {item.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 relative">
                  <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                  <div className="text-center">
                    <Badge className="bg-[#1F827C]/10 text-[#1F827C] text-sm font-medium px-4 py-2">
                      Available on Amazon
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust & Security Section */}
        <Card className="max-w-5xl mx-auto mb-20 shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 lg:p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F827C]/5 to-emerald-600/5"></div>
            <div className="text-center relative">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gradient-to-r from-[#1F827C] to-emerald-600 rounded-2xl shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why Trust Our Process?</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                We've built a transparent, secure system that ensures your contributions make the maximum impact
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="p-4 bg-green-100 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Truck className="w-10 h-10 text-green-600 mx-auto" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Direct Delivery</h3>
                  <p className="text-slate-600 leading-relaxed">Items are delivered directly to DCPW Trust premises with full tracking</p>
                </div>
                <div className="text-center group">
                  <div className="p-4 bg-blue-100 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <CreditCard className="w-10 h-10 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Secure Payments</h3>
                  <p className="text-slate-600 leading-relaxed">All transactions processed securely through Amazon (Prepaid only)</p>
                </div>
                <div className="text-center group">
                  <div className="p-4 bg-red-100 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <Share2 className="w-10 h-10 text-red-600 mx-auto" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Social Impact</h3>
                  <p className="text-slate-600 leading-relaxed">Your contribution featured on our social media platforms with recognition</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto shadow-2xl border-0 bg-gradient-to-r from-[#1F827C] to-emerald-600 overflow-hidden">
            <CardContent className="p-8 lg:p-12 text-white relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <Heart className="w-12 h-12 text-white/90" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Make a Difference?</h3>
                <p className="text-white/90 mb-8 leading-relaxed text-lg max-w-xl mx-auto">
                  Every contribution matters. Join our mission to provide essential items to those in need. 
                  Your generosity will be recognized and celebrated in our community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-[#1F827C] hover:bg-slate-100 font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Contribute Now
                  </Button>
                  <Link to="/mission">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white text-white hover:bg-white hover:text-[#1F827C] font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      Learn Our Mission
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
