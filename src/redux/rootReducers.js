import { combineReducers } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/courseReducer";
const rootReducers = combineReducers({
   courseData:coursesReducer
})
export default rootReducers;

