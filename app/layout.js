// File: app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/Navbar'; // 1. IMPORT THE NAVBAR

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CPS Academy Courses',
  description: 'Internship Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AuthProvider>
          <Navbar /> {/* 2. PLACE IT HERE */}
          <main className="p-8"> {/* Add some padding to the main content */}
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}