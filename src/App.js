import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import AllCourses from "./pages/course/AllCourses";
import AllPremiumCourses from "./pages/PremiumCourses/AllPremiumCourses";
import CourseDetail from "./pages/course/CourseDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
  { path: "register", element: <Register /> }


])
function App() {
  return <RouterProvider router={router} />;
}

export default App;