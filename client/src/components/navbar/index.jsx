// import { type } from "os";
import {useState} from "react";
import { Link } from "react-router-dom";
import { Box,Typography,useTheme } from "@mui/material";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import FlexBetween from "../FlexBetween";
// Props = {}



const Navbar = () => {
    const {palette} = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return <FlexBetween mb="4px" p="2px 0px" color={palette.grey[300]}>
        {/* left side */}
        <FlexBetween gap={"4px"}>
            <BlurOnIcon sx={{fontSize:"28px"}}/>
            <Typography variant="h3" fontSize={"16px"}>
                FinanSight
            </Typography>
        </FlexBetween>
        {/* right side */}
        <FlexBetween gap={"4px"}>
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link to="/" onClick={() => setSelected("dashboard")}
                style={{color:selected==="dashboard"? "inherit":palette.grey[700], textDecoration: "inherit"}}>
                Dashboard
                </Link>
            </Box>
            <Box sx={{"&:hover":{color:palette.primary[100]}}}>
                <Link to="/perdictions" onClick={() => setSelected("perdictions")}
                style={{color:selected==="perdictions"? "inherit":palette.grey[700], textDecoration: "inherit"}}>
                Perdictions
                </Link>
            </Box>
        </FlexBetween>
    </FlexBetween>;
}

export default Navbar;