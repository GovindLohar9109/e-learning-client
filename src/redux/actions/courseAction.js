import axios from "../../api/apiClient";

// FOR COURSES
export const addCourse = async (course) => {
  try {
    await axios.post("/admin/courses", course, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    window.location.href = "/admin/courses";
  } catch (err) {
    throw new Error("Add new course failed...");
  }
};

export const deleteCourse = async (courseId) => {
  try {
    await axios.delete(`admin/courses/${courseId}`);
    window.location.reload();
  } catch (err) {
    throw new Error("Delete course failed...");
  }
};

export const editCourse = async (courseId, course, navigate) => {
  try {
    await axios.put(`admin/courses/${courseId}`, course);
    window.location.href = "/admin/courses";
  } catch (err) {
    throw new Error("Edit course failed...");
  }
};

export const getCourseDetailsById = async (courseId, setCourse) => {
  try {
    const result = await axios.get(`courses/courses/${courseId}`);
    setCourse({ status: true, course: result.data });
  } catch (err) {
    setCourse({ status: true, course: {} });
  }
};

export const getAllCourses = async (limit, search, setCourses) => {
  const params = {
    search: search || undefined,
    limit: limit || 0,
  };
  try {
    const result = await axios.get(`courses/courses/limit`, {
      params,
    });
    setCourses({ status: true, courses: result.data });
  } catch (err) {
    setCourses({ status: false, courses: [] });
  }
};

export const getCoursesCount = async (setCoursesCount) => {
  try {
    const result = await axios.get("courses/courses/count");
    setCoursesCount(result.data);
  } catch (err) {
    setCoursesCount(0);
  }
};
