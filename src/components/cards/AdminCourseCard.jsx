import { NavLink } from "react-router";

export default function CourseCard() {
    function handleDeleteCourse() {
        // course delete code will be here
    }
    return (
        <div className="card shadow" style={{ width: "25rem" }}>
            <img src={`${process.env.PUBLIC_URL}/img/bg1`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-bold"></h5>
                <p className="card-text"> </p>
                <span className="card-text">Duration : 3 hour </span>
            </div>
            <ul className="list-group list-group-flush text-center align-items-center" >
                <li className="list-group-item w-100"><NavLink to={`/admin/edit-course/1`} className="text-deco-none"><button type="button" style={{ width: "100%" }} className="btn btn-danger  d-block text-bold" >Edit</button></NavLink></li>
                <li className="list-group-item w-100"> <button type="button" onClick={handleDeleteCourse} style={{ width: "100%" }} className="btn btn-secondary d-block text-bold">Delete </button> </li>
            </ul>
        </div>
    )
}