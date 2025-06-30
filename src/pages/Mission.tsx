
import React from 'react';
import { ArrowRight, Heart, Users, Target, Globe, Star, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  type: 'milestone' | 'goal';
  status: 'completed' | 'in-progress' | 'planned';
  icon: React.ReactNode;
}

const Mission = () => {
  const timelineData: TimelineItem[] = [
    {
      year: '2020',
      title: 'Foundation Established',
      description: 'Started our journey with a vision to create positive change in communities worldwide through dedicated service.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      type: 'milestone',
      status: 'completed',
      icon: <Heart className="w-5 h-5" />
    },
    {
      year: '2021',
      title: 'First Community Program',
      description: 'Launched our inaugural community outreach program, reaching 500 families in need across multiple locations.',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80',
      type: 'milestone',
      status: 'completed',
      icon: <Users className="w-5 h-5" />
    },
    {
      year: '2022',
      title: 'Education Initiative',
      description: 'Expanded into education support, providing scholarships and learning resources to underprivileged students.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      type: 'milestone',
      status: 'completed',
      icon: <Target className="w-5 h-5" />
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Extended our reach to 5 countries, impacting over 10,000 lives directly through various humanitarian programs.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      type: 'milestone',
      status: 'completed',
      icon: <Globe className="w-5 h-5" />
    },
    {
      year: '2024',
      title: 'Sustainable Development Goals',
      description: 'Currently implementing comprehensive sustainability programs and green initiatives for environmental conservation.',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80',
      type: 'goal',
      status: 'in-progress',
      icon: <Star className="w-5 h-5" />
    },
    {
      year: '2025',
      title: 'Digital Innovation Hub',
      description: 'Planning to launch a digital platform connecting donors, volunteers, and beneficiaries for maximum impact.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      type: 'goal',
      status: 'planned',
      icon: <Target className="w-5 h-5" />
    },
    {
      year: '2026',
      title: '50,000 Lives Impacted',
      description: 'Our ambitious goal to directly impact 50,000 lives through our various programs and community initiatives.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
      type: 'goal',
      status: 'planned',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'planned': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors">
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
              <Calendar className="w-3 h-3 mr-1" />
              Our Journey
            </Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
            Our Mission & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Timeline</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
            WOW...!!! WHAT A JOURNEY SO FAR...!!!
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Completed Milestones</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span>Current Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span>Future Goals</span>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="max-w-4xl mx-auto mb-8 lg:mb-16 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6 lg:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 lg:mb-6">
                <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Company Milestone</h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed italic">
                "To empower communities worldwide through sustainable development initiatives, 
                education support, and compassionate action, creating lasting positive impact 
                that transforms lives and builds a better future for all."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gray-300 hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8 lg:space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  {/* Mobile Layout */}
                  <div className="lg:hidden w-full">
                    <div className="flex items-center mb-4">
                      <div className={`w-4 h-4 rounded-full ${getStatusColor(item.status)} border-4 border-white shadow-lg mr-4 flex-shrink-0`}></div>
                      <div className="bg-white rounded-lg shadow-md px-3 py-2 border">
                        <div className="text-2xl font-bold text-gray-900">{item.year}</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-4 border ml-8">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full sm:w-32 h-24 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:block lg:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    {index % 2 === 0 ? (
                      <div className="bg-white rounded-lg shadow-lg p-6 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Central Date Circle - Desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(item.status)} border-4 border-white shadow-lg z-10`}></div>
                    <div className="mt-2 bg-white rounded-lg shadow-md px-4 py-3 text-center border">
                      <div className="text-2xl font-bold text-gray-900">{item.year}</div>
                    </div>
                  </div>

                  {/* Right side content - Desktop only */}
                  <div className={`hidden lg:block lg:w-5/12 ${index % 2 === 1 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                    {index % 2 === 1 ? (
                      <div className="bg-white rounded-lg shadow-lg p-6 border">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 lg:mt-16">
          <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-gradient-to-r from-orange-500 to-red-500">
            <CardContent className="p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-orange-100 mb-6 leading-relaxed text-sm lg:text-base">
                Be part of our journey to create positive change. Together, we can achieve our ambitious goals 
                and make a lasting impact on communities worldwide.
              </p>
              <Link to="/contribute">
                <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Get Involved Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mission;
