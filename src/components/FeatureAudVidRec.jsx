import React from "react";
import { Video, Mic, Hand, Shield, ArrowRight } from "lucide-react";

export default function FeatureAudVidRec() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-6 mx-auto">
            <Video className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            Audio/Video Recording
          </h1>
          <div className="space-y-4 mb-6">
            <FeatureDetail
              icon={Hand}
              title="Gesture Activation"
              description="Start recording discreetly with a simple hand gesture, no need to unlock your phone."
            />
            <FeatureDetail
              icon={Mic}
              title="High-Quality Audio"
              description="Capture clear audio even in noisy environments with advanced noise reduction."
            />
            <FeatureDetail
              icon={Shield}
              title="Secure Storage"
              description="All recordings are encrypted and stored securely on your device."
            />
          </div>
         
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">3 of 4 features</p>
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
            Your safety is our priority. Familiarize yourself with these
            features for quick access when needed.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureDetail({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <Icon className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
      <div>
        <h2 className="font-semibold text-gray-700 mb-1">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
