import Background from "../../components/common/Background"
import CourseCard from "../../components/cards/CourseCard"

export default function AllCourses() {


    return <>
        <div className="p-5">
            <div>
                <Background img={"bg2"} />
            </div>
            <div>
                <div className="m-2 my-4 mb-5 w-25 m-auto">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                    {([1, 2, 3, 4, 5].map((course, idx) => {
                        return <CourseCard key={idx} course={course} />
                    }))}
                </div>
                <div>

                </div>
            </div>
        </div>
    </>
}