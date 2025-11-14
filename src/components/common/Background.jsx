import { Box } from "@mui/material"

export default function Background({ img }) {


    return <>
        <Box>
            <img src={`../../assets/images/${img}.png`} className="w-100 h-100 d-block" alt="" />
        </Box>
    </>
}