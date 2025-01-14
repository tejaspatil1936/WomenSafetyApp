import React from "react";
import { AlertCircle } from "lucide-react";

export default function FeatureEmergencySOS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Icon Section */}
          <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6 mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Emergency SOS
          </h1>
          {/* Feature List */}
          <ul className="space-y-4">
            <li>
              <h2 className="text-lg font-semibold text-gray-800">
                Quick Activation
              </h2>
              <p className="text-sm text-gray-600">
                Easily trigger an SOS alert with a single tap or by shaking your
                device.
              </p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-gray-800">
                Instant Notifications
              </h2>
              <p className="text-sm text-gray-600">
                Automatically send alerts with your location to pre-selected
                emergency contacts.
              </p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-gray-800">Loud Alarm</h2>
              <p className="text-sm text-gray-600">
                Activate a loud alarm to draw attention and deter potential
                threats.
              </p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-gray-800">
                Emergency Services
              </h2>
              <p className="text-sm text-gray-600">
                Option to automatically call local emergency services when SOS
                is activated.
              </p>
            </li>
          </ul>
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 text-sm text-gray-600">
            <span>1 of 4 features</span>
            <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Next <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Remember: Your safety is our top priority. Familiarize yourself with
            these features.
          </p>
        </div>
      </div>
    </div>
  );
}
