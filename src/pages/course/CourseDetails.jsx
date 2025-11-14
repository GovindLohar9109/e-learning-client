import { NavLink, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetailsById } from "../../redux/actions/courseAction";
export default function CourseDetail() {
    var { course_id } = useParams();
    var dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourseDetailsById(course_id));
    }, [dispatch])
    var data = useSelector((state) => state.courseData);
    return (<>
        {(data.status && data.course) ?
            <div>
                <h2 className="text-center py-3">Welcome to ({data.course.name})</h2>
                <div className="w-50 m-auto">
                    <img src={`${process.env.PUBLIC_URL}/img/${data.course.image_url}`} className="w-100 h-100 card-img-top border" alt="..." />
                </div>
                <div className="w-50 m-auto d-flex justify-content-space-between my-5  gap-5 text-center align-items-center" >
                    <NavLink to={data.course.link} className="text-deco-none w-100"><button type="button" style={{ width: "100%" }} className="btn btn-danger  d-block text-bold" >Documentation</button></NavLink>
                    <NavLink to="/course-details/1" className="text-deco-none w-100"><button type="button" style={{ width: "100%" }} className="btn btn-primary d-block text-bold">Add To My</button></NavLink>
                </div>
                <div className="my-5 ">
                    <h3 className="text-center bg-danger w-50 m-auto text-white p-3 rounded">Topic Which You Will Learn In {data.course.name} Course</h3>
                    <div className="w-50 border m-auto my-5">
                        <table className="text-center table table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Topic Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.course.topics.map((topic, idx) => {
                                        return (<>
                                            <tr key={idx}>
                                                <th scope="row">{idx + 1}</th>
                                                <td>{topic}</td>
                                            </tr>
                                        </>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            : ""
        }
    </>)
}