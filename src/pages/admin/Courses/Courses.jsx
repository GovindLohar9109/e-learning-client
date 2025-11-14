import { NavLink } from "react-router";
import AdminCourseCard from "../../../components/cards/AdminCourseCard";

export default function Courses() {

    return <div className="w-100 ">
        <div style={{ height: "85vh", overflow: "auto" }}>
            <div className="d-flex align-item-center">
                <div
                    className="m-2 my-4 mb-5 w-50 m-auto p-2 shadow "
                >
                    <input
                        className="form-control m-2 p-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
                <div className="m-5">
                    <NavLink to="/add-course"><button type="button" className="btn  bg-primary text-white text-bold px-5">ADD NEW COURSE</button></NavLink>

                </div>
            </div>
            {(true) ?
                <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                    {[1,2,3,4].map((course, idx) => {

                        return <AdminCourseCard key={idx} course={course} />
                    })}
                </div>
                :
                ""
            }
        </div>
    </div>

}