import axios from "axios";
import { url } from "../../assets/data";
export const addToMyCourse = async (course_id, user_id) => {
    try {
        var result = await axios.post(url + `/mycourses/${course_id}/${user_id}`);
        console.log(result);
        window.location = "/myprofile/mycourses"
    }
    catch (err) {
    }
}
export const getMyAllCourses = () => async (disptach) => {
    var user_id = 13;
    try {
        var result = await axios.get(url + `/mycourses/${user_id}`);
        disptach({ type: "GET_MY_ALL_COURSES", payload: result.data })
    }
    catch (err) {
        disptach({ type: "GET_MY_ALL_COURSES", payload: [] })
    }
}
export const removeMyCourse = async (myCourseId) => {
    var userId = 13;
    try {
        var result = await axios.delete(url + `/mycourses/${myCourseId}/${userId}`);
    }
    catch (err) {
    }
    window.location = "/myprofile/mycourses"
}
