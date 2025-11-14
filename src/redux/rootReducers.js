import { combineReducers } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/courseReducer";
import myCourseReducer from "./reducers/myCourseReducer"
const rootReducers = combineReducers({
   courseData:coursesReducer,
   myCourseData:myCourseReducer
})
export default rootReducers;

