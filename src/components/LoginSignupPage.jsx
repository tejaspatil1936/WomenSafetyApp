import React from "react";
import { Mail, Lock, User } from "lucide-react";

export default function LoginSignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-6 mx-auto">
            <User className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Login to Your Account
          </h1>

          {/* Login Form */}
          <form className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none text-sm text-gray-600"
              />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-sm text-gray-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            {/* <Google className="w-5 h-5" /> */}
            <span>Login with Google</span>
          </button>

          {/* Signup Option */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-indigo-500 hover:text-indigo-600 font-medium"
              >
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
