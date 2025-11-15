import { NavLink } from "react-router";
import AdminCourseCard from "../../../components/cards/AdminCourseCard";
import {useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../../redux/actions/courseAction";
export default function Courses() {   
    const [search, setSearch] = useState(""); 
    var dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCourses(search));
    }, [dispatch,search])
    var data = useSelector((state) => state.courseData);
   
  
     return <div className="w-100 ">
            <div style={{ height: "85vh", overflow: "auto" }}>
                <div className="d-flex align-item-center">
                    <div
                        className="m-2 my-4 mb-5 w-50 m-auto p-2 shadow "
                    >
                        <input onChange={(e)=>setSearch(e.target.value)}
                            className="form-control m-2 p-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                    <div className="m-5">
                        <NavLink to="/add-course"><button type="button" className="btn  bg-primary text-white text-bold px-5">ADD NEW COURSE</button></NavLink>                    </div>
                </div>
                {(data.status) ?
                    <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                        {data.courses.map((course, idx) => {                            return <AdminCourseCard key={idx} course={course} />
                        })}                    </div>
                    :
                    <div className="text-center">
                         <h3>There are no Courses</h3>
                    </div>
                }
            </div>
        </div>
    
}