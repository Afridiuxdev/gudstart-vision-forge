
import React from 'react';
import { ArrowRight, ShoppingCart, Package, CheckCircle, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contribute = () => {
  const steps = [
    {
      step: 1,
      title: "Choose Essential Items",
      description: "Browse our curated list of essential items needed by communities",
      icon: <ShoppingCart className="w-8 h-8" />,
      action: "BROWSE ITEMS"
    },
    {
      step: 2,
      title: "Purchase via Amazon",
      description: "Buy items directly from our Amazon wishlist for secure transactions",
      icon: <Package className="w-8 h-8" />,
      action: "SHOP ON AMAZON"
    },
    {
      step: 3,
      title: "Track Your Impact",
      description: "Get updates on how your contribution is making a difference",
      icon: <CheckCircle className="w-8 h-8" />,
      action: "VIEW IMPACT"
    }
  ];

  const essentialItems = [
    { name: "Food Packages", price: "$25", description: "Nutritious meals for a family of 4" },
    { name: "School Supplies", price: "$15", description: "Books, pens, and educational materials" },
    { name: "Medical Kits", price: "$35", description: "First aid and basic medical supplies" },
    { name: "Clean Water Filters", price: "$45", description: "Portable water purification systems" },
    { name: "Blankets & Clothing", price: "$20", description: "Warm clothing and bedding" },
    { name: "Hygiene Kits", price: "$12", description: "Soap, toothbrush, and personal care items" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors">
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
              <Shield className="w-3 h-3 mr-1" />
              Secure Contributions
            </Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
            Contribute Essential Items
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> with Trust</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
            Help communities in need by purchasing essential items through our secure Amazon partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-teal-500" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Direct Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Full Transparency</span>
            </div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">
            How to Contribute in 3 Simple Steps
          </h2>
          
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="shadow-lg border-0 bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="text-teal-600 mr-3">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                      <Badge className="bg-teal-100 text-teal-800 text-xs">
                        {step.action}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-center items-center space-x-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center max-w-xs">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <Card className="shadow-lg border-0 bg-white h-48 flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="text-teal-600 mb-4 flex justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1">{step.description}</p>
                      <Badge className="bg-teal-100 text-teal-800 text-xs self-center">
                        {step.action}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-teal-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Essential Items Grid */}
        <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">
            Essential Items Needed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialItems.map((item, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold text-gray-900">{item.name}</CardTitle>
                    <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
                      {item.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy on Amazon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust & Security Section */}
        <Card className="max-w-4xl mx-auto mb-12 lg:mb-16 shadow-lg border-0 bg-white">
          <CardContent className="p-6 lg:p-8">
            <div className="text-center">
              <Shield className="w-12 h-12 lg:w-16 lg:h-16 text-teal-600 mx-auto mb-4 lg:mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Why Trust Our Process?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Direct Delivery</h3>
                  <p className="text-sm text-gray-600">Items are delivered directly to communities in need</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
                  <p className="text-sm text-gray-600">All transactions are processed securely through Amazon</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Full Transparency</h3>
                  <p className="text-sm text-gray-600">Track your contribution and see the impact you're making</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-gradient-to-r from-teal-500 to-blue-500">
            <CardContent className="p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Start Contributing Today</h3>
              <p className="text-teal-100 mb-6 leading-relaxed text-sm lg:text-base">
                Your contribution can make a real difference in someone's life. Every item you purchase 
                goes directly to those who need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Shop Amazon Wishlist
                </Button>
                <Link to="/mission">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
                    Learn Our Mission
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
