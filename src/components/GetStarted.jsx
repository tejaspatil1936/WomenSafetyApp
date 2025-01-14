import React from "react";
import PropTypes from "prop-types";
import { ShieldCheck, AlertCircle, MapPin, Phone } from "lucide-react";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6 mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            Women's Safety App
          </h1>
          <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
            Your personal guardian for safety and peace of mind. Get started
            now to access essential safety features.
          </p>
          {/* Features Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <FeatureItem icon={AlertCircle} text="Emergency SOS" />
            <FeatureItem icon={MapPin} text="Location Sharing" />
            <FeatureItem icon={Phone} text="Trusted Contacts" />
            <FeatureItem icon={ShieldCheck} text="Safety Resources" />
          </div>
          {/* Get Started Button */}
          <button
            className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-sm sm:text-base"
            onClick={() => alert("Get Started clicked!")}
          >
            Get Started
          </button>
        </div>
        {/* Footer Section */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

// Feature Item Component (JS Version with PropTypes Validation)
function FeatureItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="w-5 h-5 text-purple-600" />
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}

// PropTypes Validation
FeatureItem.propTypes = {
  icon: PropTypes.elementType.isRequired, // Ensures `icon` is a valid React component
  text: PropTypes.string.isRequired,      // Ensures `text` is a string
};
