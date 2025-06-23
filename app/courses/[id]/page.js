// File: app/courses/[id]/page.js
"use client"; // MUST BE A CLIENT COMPONENT TO USE CONTEXT

import { useAuth } from '../../../context/AuthContext';
import coursesData from '../../../data/courses.json';
import Link from 'next/link';

// This function can now be simpler since it's in the same file
function getCourse(id) {
  const courseId = parseInt(id, 10);
  return coursesData.find((course) => course.id === courseId);
}

export default function SingleCoursePage({ params }) {
  const { user } = useAuth(); // Get the current user from our context!
  const course = getCourse(params.id);

  if (!course) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
        <Link href="/courses" className="text-indigo-600 hover:underline mt-4 inline-block">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  // Check if user has permission to see modules
  const canViewModules = user && (user.role === 'Student' || user.role === 'Developer');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/courses" className="text-indigo-600 hover:underline mb-6 inline-block">
        ← Back to All Courses
      </Link>
      <h1 className="text-5xl font-extrabold mb-4 text-gray-800">{course.title}</h1>
      <p className="prose lg:prose-xl text-lg text-gray-700 mb-8">{course.description}</p>
      
      <h2 className="text-3xl font-bold mb-6 text-gray-700 border-t pt-6">Course Modules</h2>
      
      {/* ---- THE CORE LOGIC IS HERE ---- */}
      {canViewModules ? (
        <div className="space-y-4">
          {course.modules && course.modules.length > 0 ? (
            course.modules.map((module) => (
              <div key={module.id} className="bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{module.name}</h3>
                <p className="text-gray-600 mt-2">{module.details}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No modules available for this course yet.</p>
          )}
        </div>
      ) : (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
          <p className="font-bold">Premium Content</p>
          <p>You must be logged in as a Student or Developer to view module details. Please <Link href="/login" className="font-bold underline">log in</Link>.</p>
        </div>
      )}
      {/* ---- END OF CORE LOGIC ---- */}
    </div>
  );
}