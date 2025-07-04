
import React from 'react';
import { Heart, Users, Building, Home, Target, Sprout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  status: 'completed' | 'current' | 'future';
  image: string;
}

const JourneyTimeline = () => {
  const timelineEntries: TimelineEntry[] = [
    {
      year: '2013',
      title: 'DCPW Trust was founded with a mission to serve the needy',
      description: 'Started with just 20 meals per week.',
      icon: <Heart className="w-5 h-5" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=300&h=200&fit=crop'
    },
    {
      year: '2016',
      title: 'Increased community engagement',
      description: 'Reached 100+ meals per week through volunteer support.',
      icon: <Users className="w-5 h-5" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop'
    },
    {
      year: '2021',
      title: 'Expanded with infrastructure',
      description: 'Inaugurated our first Free Food Hall and began regular service.',
      icon: <Building className="w-5 h-5" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=300&h=200&fit=crop'
    },
    {
      year: '2023',
      title: 'Spiritual & social inclusion',
      description: 'Started serving meals at our affiliated temple premises.',
      icon: <Home className="w-5 h-5" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop'
    },
    {
      year: '2025',
      title: 'Serving hope with consistency',
      description: 'Providing 200+ meals every week to people in need.',
      icon: <Target className="w-5 h-5" />,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      status: 'current',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop'
    }
  ];

  const futureGoal = {
    title: 'Coming Soon',
    goals: [
      { icon: <Sprout className="w-4 h-4" />, text: 'Expand across Tamil Nadu' },
      { icon: <Target className="w-4 h-4" />, text: 'Target: 10,000 meals per week' },
      { icon: <Heart className="w-4 h-4" />, text: "Let's make hunger history — together" }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Journey</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From humble beginnings to serving hundreds of meals weekly, discover how DCPW Trust has grown 
          to become a beacon of hope in our community.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-green-300 via-purple-300 via-blue-300 to-emerald-300"></div>

        {/* Timeline entries */}
        <div className="space-y-8">
          {timelineEntries.map((entry, index) => (
            <div key={index} className="relative flex items-start">
              {/* Mobile layout */}
              <div className="md:hidden flex items-start space-x-4 w-full">
                {/* Icon and line connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full ${entry.bgColor} ${entry.color} flex items-center justify-center shadow-lg border-4 border-white z-10`}>
                    {entry.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline" className="bg-white text-gray-700 border-gray-300 font-bold">
                      {entry.year}
                    </Badge>
                    {entry.status === 'current' && (
                      <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                        Now
                      </Badge>
                    )}
                  </div>
                  <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <img 
                          src={entry.image} 
                          alt={entry.title}
                          className="w-full h-32 object-cover rounded-md"
                        />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                        {entry.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {entry.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:flex items-center w-full">
                {index % 2 === 0 ? (
                  // Left side content
                  <>
                    <div className="w-5/12 pr-8 text-right">
                      <div className="flex justify-end items-center space-x-3 mb-2">
                        {entry.status === 'current' && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                            Now
                          </Badge>
                        )}
                        <Badge variant="outline" className="bg-white text-gray-700 border-gray-300 font-bold">
                          {entry.year}
                        </Badge>
                      </div>
                      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <img 
                              src={entry.image} 
                              alt={entry.title}
                              className="w-full h-40 object-cover rounded-md"
                            />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2 leading-snug text-right">
                            {entry.title}
                          </h3>
                          <p className="text-gray-600 text-sm text-right">
                            {entry.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Central icon */}
                    <div className="flex justify-center w-2/12">
                      <div className={`w-12 h-12 rounded-full ${entry.bgColor} ${entry.color} flex items-center justify-center shadow-lg border-4 border-white z-10`}>
                        {entry.icon}
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  // Right side content
                  <>
                    <div className="w-5/12"></div>
                    
                    {/* Central icon */}
                    <div className="flex justify-center w-2/12">
                      <div className={`w-12 h-12 rounded-full ${entry.bgColor} ${entry.color} flex items-center justify-center shadow-lg border-4 border-white z-10`}>
                        {entry.icon}
                      </div>
                    </div>
                    
                    <div className="w-5/12 pl-8">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="bg-white text-gray-700 border-gray-300 font-bold">
                          {entry.year}
                        </Badge>
                        {entry.status === 'current' && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                            Now
                          </Badge>
                        )}
                      </div>
                      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <img 
                              src={entry.image} 
                              alt={entry.title}
                              className="w-full h-40 object-cover rounded-md"
                            />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                            {entry.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {entry.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Future Goals Section - Centered */}
          <div className="relative flex justify-center mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white flex items-center justify-center shadow-lg border-4 border-white z-10 mb-4">
                <Sprout className="w-5 h-5" />
              </div>
              
              <Badge variant="outline" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 mb-3">
                {futureGoal.title}
              </Badge>
              
              <Card className="shadow-lg border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 max-w-md">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {futureGoal.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-center justify-center space-x-3">
                        <div className="text-green-600 flex-shrink-0">
                          {goal.icon}
                        </div>
                        <span className="text-gray-700 font-medium">
                          {goal.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
