
import { list1, list2 } from "../../assets/data.js";

import Background from "../../components/common/Background.jsx";
import Layer from "./Layer";
import Footer from "../../components/common/Footer";


export default function Home() {


    return (<>
        <Background img={"bg1"} />
        <Layer list={list1} />
        <h1>Courses will be there</h1>
        <Layer list={list2} />
        


    </>
    )
}