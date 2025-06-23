// File: app/courses/page.js
import Link from 'next/link';
import coursesData from '../../data/courses.json';

function getCourses() {
  return coursesData;
}

export default function CoursesPage() {
  const courses = getCourses();

  return (
    <div> {/* Removed padding from here, it's in layout.js now */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900">All Courses</h1>
      
      {/* THIS IS THE RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id}>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h2>
              <p className="text-gray-600 flex-grow">{course.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}