import Background from "../../components/common/Background"
import PremiumCourseCard from "../../components/cards/PremiumCourseCard"


export default function AllPremiumCourses() {

    return <>
        <div className="p-5">
            <div>
                <Background img={"bg2"} />
            </div>
            <h2 className="text-primary text-center p-2 my-3">
                This will be Premium Courses
            </h2>
            <div>
                <div className="m-2 my-4 mb-5 w-25 m-auto">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7,].map((course, idx) => {

                        return <PremiumCourseCard key={idx} />
                    })}
                </div>
                <div>

                </div>
            </div>
        </div>
    </>
}