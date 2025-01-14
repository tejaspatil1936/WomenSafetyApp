import React from "react";
import { MapPin, Users, Clock, Lock } from "lucide-react";

export default function FeatureLiveLoc() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Icon Section */}
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
            <MapPin className="w-8 h-8" />
          </div>
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Live Location Sharing
          </h1>
          {/* Feature List */}
          <ul className="space-y-4">
            <li>
              <h2 className="flex items-center text-lg font-semibold text-gray-800">
                <Users className="w-5 h-5 text-green-600 mr-2" />
                Share with Trusted Contacts
              </h2>
              <p className="text-sm text-gray-600">
                Easily share your real-time location with pre-selected trusted
                contacts.
              </p>
            </li>
            <li>
              <h2 className="flex items-center text-lg font-semibold text-gray-800">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                Timed Sharing
              </h2>
              <p className="text-sm text-gray-600">
                Set a duration for location sharing, or keep it active until you
                manually stop it.
              </p>
            </li>
            <li>
              <h2 className="flex items-center text-lg font-semibold text-gray-800">
                <Lock className="w-5 h-5 text-green-600 mr-2" />
                Privacy Control
              </h2>
              <p className="text-sm text-gray-600">
                Full control over who sees your location and for how long.
              </p>
            </li>
            <li>
              <h2 className="flex items-center text-lg font-semibold text-gray-800">
                <MapPin className="w-5 h-5 text-green-600 mr-2" />
                Route Tracking
              </h2>
              <p className="text-sm text-gray-600">
                Contacts can see your movement in real-time on a map.
              </p>
            </li>
          </ul>
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 text-sm text-gray-600">
            <span>2 of 4 features</span>
            <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Next <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Your location is only shared with the contacts you choose, for the
            duration you set.
          </p>
        </div>
      </div>
    </div>
  );
}
