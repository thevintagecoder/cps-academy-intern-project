# CPS Academy - Course Management Platform

This project is a web application built for the CPS Academy Software Engineer Intern selection test. It serves as a platform for course management and demonstrates user role-based access to course details, built with Next.js and Tailwind CSS.

**Live Demo:** [https://cps-academy-intern-project.vercel.app/](https://cps-academy-intern-project.vercel.app/)

## Project Overview

The application provides a clean and user-friendly interface for users to browse courses. It implements a complete authentication flow and dynamically renders content based on a user's role, fulfilling all the core requirements of the project brief.

The three user roles are:
- **Normal User:** Can view general course summaries.
- **Student:** Can view full course details, including module information.
- **Developer / Social Media Manager:** Can also view full course details and module information.

## Key Features

- **Course Catalog:** Displays a list of all available courses.
- **Detailed Course View:** Shows comprehensive details for a single course, including its modules.
- **Mock User Authentication:** Full login, registration, and logout functionality.
- **Role-Based Access Control:** The visibility of course modules is restricted based on the logged-in user's role.
- **Responsive Design:** The interface is fully responsive and optimized for mobile, tablet, and desktop views.

## Technology Stack

- **Frontend:** Next.js (React Framework)
- **Styling:** Tailwind CSS
- **State Management:** React Context API

## ⚠️ A Note on the Backend: A Beginner's Challenge

This project was initially planned with a Strapi backend, as specified in the project requirements. As a complete beginner to backend development, I encountered a series of persistent and critical configuration issues within the Strapi environment. Despite extensive debugging sessions (with heavy assistance from AI Studio) and multiple attempts to resolve the routing and controller problems, it became clear that the backend environment issues were beyond my current skill level and would prevent me from delivering a functional project within the given timeframe (deadline: 8th June 2025).

Faced with this roadblock, I made a strategic decision to pivot.

Instead of submitting a non-functional or incomplete project, I chose to mock the backend API. This involved creating a local JSON file to serve as the database and building the authentication and state management logic entirely within the Next.js application - concepts I was learning simultaneously through AI Studio guidance and documentation.

This decision allowed me to:
- **Meet All Frontend and Feature Requirements:** Successfully build a frontend that performs all the required tasks, including authentication, role management, and dynamic content rendering.
- **Learn Essential Frontend Concepts:** Gained hands-on experience with Next.js, React hooks (useState, useContext), state management, and built a responsive UI while building the actual application.
- **Demonstrate Adaptability and Problem-Solving:** Showed my ability to recognize my current limitations, made a pragmatic decision under pressure, and found alternative solutions to deliver a working product.

This approach allowed me to focus on learning and demonstrating frontend development skills while acknowledging that backend development requires additional learning time that wasn't available within the project timeline.

## 🎯 Beginner's Journey: Learning on the Go

**Full Transparency:** This project was built by someone completely new to Next.js and modern React development. With the tight timeframe of the intern selection process, I leveraged AI Studio as my learning companion to understand concepts, debug issues, and implement features in real-time.

### Learning Approach:
- **AI-Assisted Learning:** Used AI Studio to understand Next.js concepts, React hooks, and Tailwind CSS patterns
- **Learn-by-Doing:** Implemented each feature while simultaneously learning the underlying concepts
- **Documentation Deep-Dives:** Researched Next.js and React documentation whenever AI explanations needed clarification
- **Trial and Error:** Embraced the debugging process as a learning opportunity

This approach allowed me to deliver a functional application while building genuine understanding of the technologies involved. Every error was a learning opportunity, and every successful implementation was a milestone in my development journey.

## 🚀 Deployment Struggles: The Vercel Challenge

### The Problem
After successfully building the application locally, deployment to Vercel initially failed with an ESLint error:
```
Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. react/no-unescaped-entities
```

### The Issue
The error occurred in the login page JSX where an unescaped apostrophe in "Don't have an account?" violated Next.js's strict ESLint rules for production builds.

### The Solution
1. **Identified the Problem:** Located the unescaped apostrophe in line 59 of `app/login/page.js`
2. **Applied the Fix:** Changed `Don't` to `Don&apos;t` to properly escape the character
3. **Learned the Lesson:** Understood that development and production builds have different linting requirements

### Key Takeaway
This deployment challenge taught me that:
- Local development doesn't always catch production-level issues
- ESLint rules are stricter in production builds
- Proper HTML entity escaping is crucial for JSX
- Every deployment error is a learning opportunity

## Installation and Setup

Running this project locally is very straightforward.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thevintagecoder/cps-academy-intern-project.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd my-project-frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Test Accounts

You can use the following mock accounts to test the different roles:

### Role: Student
- **Email:** `student@test.com`
- **Password:** (any password will work)

### Role: Developer
- **Email:** `dev@test.com`
- **Password:** (any password will work)

### Role: Normal User
- **Email:** Any other email address (e.g., `user@test.com`)
- **Password:** (any password will work)
