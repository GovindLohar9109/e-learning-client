import MyCourseCard from "../../components/cards/MyCourseCard";
import { CircularProgress } from "@mui/material";

export default function MyCoursesCourses() {


    return <>

        {(data.status) ?
            <div className="w-100 ">
                <div style={{ height: "85vh", overflow: "auto" }}>

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
                    <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
                        {data.myCourses.map((course, idx) => {

                            return <MyCourseCard key={idx} course={course} />
                        })}
                    </div>
                    :
                </div>
            </div> : <div className="text-center mx-auto my-5 ">
                <CircularProgress />
            </div>
        }
    </>
}