import React from "react";
import { Phone, Shield, MapPin, ArrowRight } from "lucide-react";

export default function FeatureHelplines() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6 mx-auto">
            <Phone className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            Emergency Helpline Numbers
          </h1>
          <div className="space-y-4 mb-6">
            <FeatureDetail
              icon={Shield}
              title="Police Assistance"
              description="Contact your local police department for immediate assistance and ensure safety."
            />
            <FeatureDetail
              icon={MapPin}
              title="Ambulance Service"
              description="Quickly reach emergency medical services to handle health-related emergencies."
            />
            <FeatureDetail
              icon={Phone}
              title="Women’s Helpline"
              description="Dedicated helplines for women's safety, available 24/7 in your region."
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">2 of 4 features</p>
            <button
              className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center space-x-2 text-sm sm:text-base"
              aria-label="View next feature"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Keep these numbers accessible and share with others for quick help
            during emergencies.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureDetail({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <Icon className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
      <div>
        <h2 className="font-semibold text-gray-700 mb-1">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
