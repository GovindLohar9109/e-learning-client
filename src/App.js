import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import AllCourses from "./pages/course/AllCourses";
import AllPremiumCourses from "./pages/PremiumCourses/AllPremiumCourses";
import CourseDetail from "./pages/course/CourseDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MyProfileLayout from "../src/components/layout/MyProfileLayout"
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import Courses from "./pages/admin/Courses/Courses";
import EditCourse from "./pages/admin/Courses/EditCourse";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "all-courses", element: <AllCourses /> },
      { path: "premium-courses", element: <AllPremiumCourses /> },
      { path: "course-details/:course_id", element: <CourseDetail /> },

    ],
  }
  ,
  // authentication routes

  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  // My profile routes

  {
    path: "/myprofile",
    element: <MyProfileLayout />,
  },

  // Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashBoard /> },
      { path: "courses-manage", element: <Courses /> },
      { path: "edit-course/:course_id", element: <EditCourse /> },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;