
import React from 'react';
import { Heart, Users, Globe, Target, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const impactStats = [
    { number: '10,000+', label: 'Lives Impacted', icon: <Heart className="w-6 h-6" /> },
    { number: '5', label: 'Countries Reached', icon: <Globe className="w-6 h-6" /> },
    { number: '50+', label: 'Community Programs', icon: <Users className="w-6 h-6" /> },
    { number: '1000+', label: 'Volunteers', icon: <Target className="w-6 h-6" /> },
  ];

  const programs = [
    {
      title: 'Education Support',
      description: 'Providing scholarships, learning resources, and educational infrastructure to underserved communities.',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Community Development',
      description: 'Building sustainable communities through healthcare, clean water, and economic empowerment initiatives.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      title: 'Emergency Relief',
      description: 'Rapid response to natural disasters and humanitarian crises, providing immediate aid and long-term recovery support.',
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">GudStart Charity</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
              <Link to="/mission" className="text-gray-600 hover:text-orange-600 transition-colors">Mission & Goals</Link>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Donate Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200">
            Making a Difference Since 2020
          </Badge>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Communities,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Changing Lives</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join us in creating lasting positive impact through sustainable development, 
            education support, and community empowerment initiatives worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Start Donating Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/mission">
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 w-full sm:w-auto">
                Our Mission & Goals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-orange-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We focus on sustainable solutions that address root causes and create lasting change in communities worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center text-white mb-4`}>
                  {program.icon}
                </div>
                <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20">
        <Card className="shadow-2xl border-0 bg-gradient-to-r from-orange-500 to-red-500">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your contribution, no matter the size, helps us continue our mission to create positive 
              change and empower communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Donate Now
                <Heart className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Become a Volunteer
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">GudStart Charity</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering communities and changing lives through sustainable development and compassionate action.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <Link to="/" className="block hover:text-orange-400 transition-colors">Home</Link>
                <Link to="/mission" className="block hover:text-orange-400 transition-colors">Mission & Goals</Link>
                <a href="#" className="block hover:text-orange-400 transition-colors">Programs</a>
                <a href="#" className="block hover:text-orange-400 transition-colors">Get Involved</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@gudstart.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Global Headquarters</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GudStart Charity. All rights reserved. Making a difference, one community at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
