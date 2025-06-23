// File: app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
        Welcome to <span className="text-indigo-600">CPS Academy</span>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
        Your journey to mastering modern web development starts here. Browse our cutting-edge courses and find the perfect path for you.
      </p>
      <div className="mt-8 flex justify-center gap-x-4">
        <Link href="/courses" className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-700">
          Explore Courses
        </Link>
        <Link href="/register" className="inline-block rounded-lg bg-gray-200 px-5 py-3 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-300">
          Get Started
        </Link>
      </div>
    </div>
  );
}