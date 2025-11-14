import { NavLink, useParams } from "react-router";

export default function CourseDetail() {
    var { course_id } = useParams();
    return (<>

        <div>
            <h2 className="text-center py-3">Welcome to (Node.js)</h2>
            <div className="w-50 m-auto">
                <img src={`${process.env.PUBLIC_URL}/img/${"bg1.png"}`} className="w-100 h-100 card-img-top border" alt="..." />
            </div>
            <div className="w-50 m-auto d-flex justify-content-space-between my-5  gap-5 text-center align-items-center" >
                <NavLink to="" className="text-deco-none w-100"><button type="button" style={{ width: "100%" }} className="btn btn-danger  d-block text-bold" >Documentation</button></NavLink>
                <NavLink to="/course-details/1" className="text-deco-none w-100"><button type="button" style={{ width: "100%" }} className="btn btn-primary d-block text-bold">Add To My</button></NavLink>
            </div>
            <div className="my-5 ">
                <h3 className="text-center bg-danger w-50 m-auto text-white p-3 rounded">Topic Which You Will Learn In this Course</h3>
                <div className="w-50 border m-auto my-5">
                    <table className="text-center table table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Topic Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* Course topic will be there */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>)
}