import { Outlet } from "react-router";
import Header from "../partials/Header";
import LeftSide from "../common/MyProfileLeftSide";


export default function MyProfileLayout() {

    return (
        <>
            <Header />
            <div >
                <div>
                    <h3 className="text-white bg-primary text-center p-2 m-0 ">My Profile </h3>
                </div>
                <div className="d-flex w-100 " style={{ height: "85vh" }}>
                    <LeftSide />
                    <Outlet />
                </div>

            </div>
        </>
    )

}