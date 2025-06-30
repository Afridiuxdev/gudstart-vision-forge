
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
  type: 'milestone' | 'goal';
  status: 'completed' | 'in-progress' | 'planned';
  icon: React.ReactNode;
}

const Mission = () => {
  const timelineData: TimelineItem[] = [
    {
      year: '2020',
      title: 'Foundation Established',
      description: 'Started our journey with a vision to create positive change in communities worldwide.',
      type: 'milestone',
      status: 'completed',
      icon: <Heart className="w-5 h-5" />
    },
    {
      year: '2021',
      title: 'First Community Program',
      description: 'Launched our inaugural community outreach program, reaching 500 families in need.',
      type: 'milestone',
      status: 'completed',
      icon: <Users className="w-5 h-5" />
    },
    {
      year: '2022',
      title: 'Education Initiative',
      description: 'Expanded into education support, providing scholarships and learning resources.',
      type: 'milestone',
      status: 'completed',
      icon: <Target className="w-5 h-5" />
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Extended our reach to 5 countries, impacting over 10,000 lives directly.',
      type: 'milestone',
      status: 'completed',
      icon: <Globe className="w-5 h-5" />
    },
    {
      year: '2024',
      title: 'Sustainable Development Goals',
      description: 'Currently implementing comprehensive sustainability programs and green initiatives.',
      type: 'goal',
      status: 'in-progress',
      icon: <Star className="w-5 h-5" />
    },
    {
      year: '2025',
      title: 'Digital Innovation Hub',
      description: 'Planning to launch a digital platform connecting donors, volunteers, and beneficiaries.',
      type: 'goal',
      status: 'planned',
      icon: <Target className="w-5 h-5" />
    },
    {
      year: '2026',
      title: '50,000 Lives Impacted',
      description: 'Our ambitious goal to directly impact 50,000 lives through our various programs.',
      type: 'goal',
      status: 'planned',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return 'Unknown';
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
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Mission & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"> Goals</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We believe in creating lasting change through compassionate action, sustainable development, 
            and community empowerment. Our journey is marked by meaningful milestones and ambitious goals 
            that drive us forward.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
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
        <Card className="max-w-4xl mx-auto mb-16 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "To empower communities worldwide through sustainable development initiatives, 
                education support, and compassionate action, creating lasting positive impact 
                that transforms lives and builds a better future for all."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey & Future Goals</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-orange-400"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg ${
                    item.status === 'completed' ? 'bg-green-400' :
                    item.status === 'in-progress' ? 'bg-blue-400' : 'bg-orange-400'
                  }`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <Card className="flex-1 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="outline" className="text-sm font-semibold text-gray-600 border-gray-300">
                              {item.year}
                            </Badge>
                            <Badge className={getStatusColor(item.status)}>
                              {getStatusText(item.status)}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-gradient-to-r from-orange-500 to-red-500">
            <CardContent className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Be part of our journey to create positive change. Together, we can achieve our ambitious goals 
                and make a lasting impact on communities worldwide.
              </p>
              <Link to="/">
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
