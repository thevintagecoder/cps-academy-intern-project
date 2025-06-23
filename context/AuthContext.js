// File: context/AuthContext.js
"use client"; // This is a Client Component because it uses hooks

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 1. Create the context
const AuthContext = createContext();

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Mock login function
  const login = (email) => {
    let userRole = 'Normal User'; // Default role
    if (email.toLowerCase() === 'student@test.com') {
      userRole = 'Student';
    } else if (email.toLowerCase() === 'dev@test.com') {
      userRole = 'Developer';
    }

    const userData = { email, role: userRole };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user to local storage
    router.push('/courses'); // Redirect to courses page after login
  };

  // Register function is the same as login for this mock setup
  const register = (email) => {
    login(email); // For our mock, registering just logs you in
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from local storage
    router.push('/login'); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook for easy access to the context
export const useAuth = () => {
  return useContext(AuthContext);
};