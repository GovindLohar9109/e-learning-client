
import styled from "@emotion/styled"
import { Box, Grid, Typography, Link } from "@mui/material"
import { Link as routerLink } from "react-router-dom"

const BoxStyle = styled(Box)(({ theme }) => ({
    "p": {
        color: "white"
    },
    "div > div": {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBlock: "10px",
        "p": { fontWeight: "bold", fontSize: "1rem" }

    }
}))

export default function Layer({ list }) {

    return (
        <>
            <div className="  w-100 p-3 text-center text-bold text-white" style={{background:"red"}}>
                <div className="row">
                    {
                        list.map((item, idx) => {
                            return (
                                <div className="col-sm">
                                    {item.img}
                                    &nbsp;&nbsp;&nbsp;
                                    {item.text}
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}