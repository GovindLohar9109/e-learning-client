import { useState, useEffect } from "react";
import { useParams } from "react-router";
export default function EditCourse() {
    const { course_id } = useParams();
    const [course, setCourse] = useState({ name: "", duration: "" });
    var [message, setMessage] = useState({ status: false, message: "" });
    function handleEditCourse(e) {
        // code will here
    }
    return (
        <div>            
            {true ? (
            <div className="d-flex align-item-center my-5 justify-content-center w-100 h-50">
                <div>
                    {(message.status) ?
                        <div class="alert alert-primary" role="alert">
                            {message.message}
                        </div>
                        : ""
                    }
                    <h3 className="text-center p-2 bg-danger text-white">UPDATE COURSE</h3>
                    <form>
                        <div className="card shadow" style={{ width: "25rem" }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/bg1`}
                                className="card-img-top"
                                alt="course"
                            />
                            <div className="card-body">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={course.name}
                                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                                    placeholder="Course Name"
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    value={course.duration}
                                    onChange={(e) => setCourse({ ...course, duration: e.target.value })}
                                    placeholder="Course Duration"
                                />
                            </div>
                        </div>
                        <button type="submit" onClick={handleEditCourse} style={{ border: "none" }} className="px-4 py-2 my-2 bg-primary mx-auto w-100 text-white text-center "> SUBMIT</button>
                    </form>
                </div>
            </div>
        ) : (
            ""
        )}
        </div>
    );
}
