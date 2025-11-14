import axios from "axios";
import { url } from "../../assets/data";
// FOR COURSES 
export const addCourse = async (course, setMessage) => {
    try {
        var result = await axios.post(url + "/courses", course);
        setMessage({ status: true, msg: result.data.msg });
    }
    catch (err) {
        setMessage({ status: true, msg: "Server Error " });
    }
}
export const deleteCourse = async (course_id) => {
    try {
        var result = await axios.delete(url + `/courses/${course_id}`);
    }
    catch (err) {
    }
}
export const editCourse = async (course_id, course) => {
    try {
        var result = await axios.put(url + `/courses/${course_id}`, course);
        if (result.data.status) {
            window.location = "/admin/courses-manage"
        }
    }
    catch (err) {
    }
}
export const getAllCourses = () => async (disptach) => {
    try {
        var result = await axios.get(url + `/courses`);
        disptach({ type: "GET_ALL_COURSES", payload: result.data })
    }
    catch (err) {
        disptach({ type: "GET_ALL_COURSES", payload: [] })
    }
}
export const getCourseDetailsById = (course_id) => async (disptach) => {
    try {
        var result = await axios.get(url + `/courses/${course_id}`);
        disptach({ type: "GET_COURSE_DETAIL_BY_ID", payload: result.data })
    }
    catch (err) {
        disptach({ type: "GET_COURSE_DETAIL_BY_ID", payload: {} })
    }
}
export const getCoursesByLimit = (limit) => async (disptach) => {
    try {
        var result = await axios.get(url + `/courses/${limit}`);
        disptach({ type: "GET_COURSE_BY_LIMIT", payload: result.data })
    }
    catch (err) {
        disptach({ type: "GET_COURSE_By_LIMIT", payload: [] })
    }
}
export const getCoursesCount = async (setCoursesCount) => {
    try {
        var result = await axios.get(url + `/courses/count`);
        setCoursesCount(result.data.count);
    }
    catch (err) {
        setCoursesCount(0)
    }
}