import React from "react";
import { MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-between items-center">
      {/* Map View */}
      <div className="flex-grow flex justify-center items-center text-gray-500 text-lg">
        Map View
      </div>

      {/* Bottom Navigation */}
      <div className="w-full flex justify-between items-center p-4 bg-transparent">
        {/* Share Location */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-white shadow-md rounded-full w-14 h-14">
            <MapPin className="w-6 h-6 text-gray-700" />
          </div>
          <span className="text-xs text-gray-600 mt-2">Share Location</span>
        </div>

        {/* SOS Button */}
        <div className="flex justify-center items-center">
          <button
            className="bg-red-500 text-white font-bold text-sm px-6 py-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
            aria-label="SOS Button"
          >
            SOS
          </button>
        </div>

        {/* Helpline */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center bg-white shadow-md rounded-full w-14 h-14">
            <Phone className="w-6 h-6 text-gray-700" />
          </div>
          <span className="text-xs text-gray-600 mt-2">Helpline</span>
        </div>
      </div>
    </div>
  );
}
