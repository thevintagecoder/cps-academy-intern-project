# CPS Academy - Course Management Platform

This project is a responsive web application built for the CPS Academy Software Engineer Intern selection test. It serves as a platform for course management and demonstrates user role-based access to course details, built with Next.js and Tailwind CSS.

**Live Demo:** [https://cps-academy-intern-project.vercel.app/](https://cps-academy-intern-project.vercel.app/)

**Video Demonstration:** [Watch the 3-minute video overview on Loom]: https://www.loom.com/share/728b36a380144f9e8d88c753fcf18db0?sid=ce890ed3-1f33-4188-b731-64165bac8922

---

## Project Overview

The application provides a clean and user-friendly interface for users to browse courses. It implements a complete authentication flow and dynamically renders content based on a user's role, fulfilling all the core requirements of the project brief.

## Features Implemented

*   **Course Catalog:** Displays a list of all available courses from a local JSON data source.
*   **Detailed Course View:** Shows comprehensive details for a single course, including its modules.
*   **Mock User Authentication:** Full frontend login, registration, and logout functionality using React Context for state management.
*   **Role-Based Access Control:** The visibility of course modules is restricted based on the logged-in user's role:
    *   **Normal User:** Can only view course summaries.
    *   **Student / Developer:** Can view full course details and module information.
*   **Responsive Design:** The interface is fully responsive and optimized for mobile, tablet, and desktop views using Tailwind CSS.

---

## Technical Stack & Dependencies

*   **Framework:** Next.js `14.2.x` 
*   **Language:** JavaScript
*   **Styling:** Tailwind CSS `3.4.x`
*   **State Management:** React Context API with `useState` and `useEffect` hooks
*   **Linting:** ESLint

---

## A Note on the Backend: A Problem-Solving Pivot

This project was initially planned with a Strapi backend. During development, I encountered persistent and critical configuration issues with the Strapi environment that could not be resolved within the project's timeframe, despite extensive debugging.

Faced with this roadblock, I made a strategic decision to **mock the backend API**. This involved creating a local JSON file to serve as the database and building the authentication and state management logic entirely within the Next.js application.

This pivot allowed me to **demonstrate my core frontend development skills and adaptability** by successfully delivering a fully functional application that meets all user-facing requirements, rather than submitting an incomplete project due to backend issues. Every challenge, including a final deployment linting error (`Don't` vs `Don't`), became a valuable learning opportunity documented in the git commit history.

---

## Installation and Setup

Running this project locally is very straightforward as it has no external backend dependencies.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/thevintagecoder/cps-academy-intern-project.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd cps-academy-intern-project
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Environment Configuration

This project does not require any environment variables to run, as the backend is mocked. An `.env.example` file is included for demonstration purposes, showing what would be used if connected to a live backend.

Create a `.env.local` file in the root of the project and you could add the following:

```
# No variables needed for this version, but this is an example.
NEXT_PUBLIC_API_URL=http://localhost:1337
```

---

## Test Accounts

You can use the following mock accounts on the login page to test the different roles:

*   **Role:** Student
    *   **Email:** `student@test.com`
    *   **Password:** (any password will work)

*   **Role:** Developer
    *   **Email:** `dev@test.com`
    *   **Password:** (any password will work)

*   **Role:** Normal User
    *   **Email:** Any other email address (e.g., `user@test.com`)
    *   **Password:** (any password will work)
