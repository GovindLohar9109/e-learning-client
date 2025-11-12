#  E-Learning Management System (ELMS) — Client

The **E-Learning Management System (ELMS)** is a web-based platform that allows users to explore, learn, and manage courses through interactive documentation.  
This repository contains the **frontend client**, built using **React** (with Vite) for a fast and responsive user experience.

---

##  Overview
The ELMS client enables users to **learn through free documentation** and provides **role-based access control**.  
Users can browse and enroll in courses, while admins manage all course-related operations.

---

##  User Roles & Functional Use Cases

### 1. User Authentication
- New users can **register** or **log in** securely.
- Upon login, the system identifies the user’s role:
  - **User**
  - **Admin**
- All passwords are securely hashed and stored in the backend.

---

###  2. User Role: User

#### • View All Courses
- Browse all available courses on the platform.
- Each course card shows:
  - Title  
  - Description  
  - Options to **view free documentation** or **add to My Courses**.

#### • Access Free Documentation
- Users can open and read course documentation directly.

#### • Add to My Courses
- Save interesting courses to **My Courses** for quick access.

#### • Search Courses
- Search for specific courses by **Course Name** (Indexed search).

#### • Profile Section
- View personal details (name, email).

#### • My Courses Section
- View and manage all added courses.
- Access their documentation easily.

#### • Feedback Section
- Provide feedback for enrolled courses.

#### • Search in My Courses
- Search for specific courses added to **My Courses** by name.

---

### 3. User Role: Admin

#### • Access Admin Dashboard
- Redirected automatically after login.
- Displays key statistics (Total Courses, Total Users).

#### • Add New Course
- Create and publish new courses with required details.

#### • Edit Existing Course


#### • Delete Course
- Permanently remove a course from the platform.


---



