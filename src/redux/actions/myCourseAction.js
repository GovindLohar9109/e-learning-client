import axios from "axios";
import { url } from "../../assets/data";
export const addToMyCourse = async (course_id, user_id) => {
    try {
        var result = await axios.post(url + `/mycourses/${course_id}/${user_id}`);
        
        window.location = "/myprofile/mycourses"
    }
    catch (err) {
    }
}
export const getMyAllCourses = () => async (disptach) => {
    var user_id = 44;
    try {
        var result = await axios.get(url + `/mycourses/${user_id}`);
        console.log(result)
        disptach({ type: "GET_MY_ALL_COURSES", payload: result.data })
    }
    catch (err) {
        console.log(err)
        disptach({ type: "GET_MY_ALL_COURSES", payload: [] })
    }
}
export const removeMyCourse = async (course_id,user_id) => {
    
    try {
        var result = await axios.delete(url + `/mycourses/${course_id}/${user_id}`);
    }
    catch (err) {
    }
    window.location = "/myprofile/mycourses"
}
