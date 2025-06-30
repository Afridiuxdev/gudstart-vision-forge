
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import JourneyTimeline from '@/components/JourneyTimeline';

const Mission = () => {
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
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <JourneyTimeline />

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-orange-100 mb-6 leading-relaxed">
              Be part of our journey to create positive change. Together, we can achieve our ambitious goals 
              and make a lasting impact on communities worldwide.
            </p>
            <Link to="/contribute">
              <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Get Involved Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
