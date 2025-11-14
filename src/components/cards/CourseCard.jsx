import { NavLink } from "react-router";
import { addToMyCourse } from "../../redux/actions/myCourseAction";
export default function CourseCard({ course }) {
    function handleAddToMyCourse() {
        addToMyCourse(course.id, 44);
    }
    return (
        <div className="card" style={{ width: "25rem" }}>
            <div className="">
                <img src={`${process.env.PUBLIC_URL}/img/${course.image_url}`} className="w-100 h-100 card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title text-bold">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                <span>Duration : {course.duration}</span>
            </div>
            <ul className="list-group list-group-flush text-center align-items-center" >
                <li className="list-group-item w-100"><NavLink to={course.link} className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-danger  d-block text-bold" >Documentation</button></NavLink></li>
                <li className="list-group-item w-100"> <NavLink to="/course-details/1" className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-secondary d-block text-bold">Details </button> </NavLink></li>
                <li className="list-group-item w-100"><button type="button" onClick={handleAddToMyCourse} style={{ width: "100%" }} className="btn btn-primary d-block text-bold">Add To My</button></li>
            </ul>
        </div>
    )
}