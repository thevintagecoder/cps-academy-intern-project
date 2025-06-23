// File: components/Navbar.js
"use client"; // This must be a client component to use hooks

import Link from 'next/link';
import { useAuth } from '../context/AuthContext'; // Import our useAuth hook

export default function Navbar() {
  // Get the user and logout function from our context
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side of the navbar */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              CPS Academy
            </Link>
          </div>

          {/* Middle links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/courses" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                Courses
              </Link>
            </div>
          </div>

          {/* Right side of the navbar (conditional) */}
          <div className="flex items-center">
            {user ? (
              // If user is logged in, show their email and a Logout button
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Welcome, {user.email}</span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              // If user is not logged in, show Login and Register buttons
              <div className="space-x-4">
                <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                  Login
                </Link>
                <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}