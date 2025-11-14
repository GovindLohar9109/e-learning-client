import { Outlet } from "react-router";
import Header from "../common/Header";
import AdminLeftSide from "../common/AdminLeftSide";

export default function AdminLayout() {

    return (
        <>
            <Header />
            <div >
                <div>
                    <h3 className="text-white bg-primary text-center p-2 m-0 ">Admin Panel</h3>
                </div>
                <div className="d-flex w-100 " style={{ height: "85vh" }}>
                    <AdminLeftSide />
                    <Outlet />
                </div>
            </div>
        </>
    )

}