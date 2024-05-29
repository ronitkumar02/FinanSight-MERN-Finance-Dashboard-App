import { Box,useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLarge = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;

const gridTemplateSmall = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`

const Dashboard = (params) => {
    const isAboveMediumScreen  = useMediaQuery("(min-width: 900px)")
    // const {palette} = useTheme();
    return <Box width={"100%"} height={"93%"} display={"grid"} gap="10px"
    sx={
        isAboveMediumScreen?{
            gridTemplateColumns: "repeat(3,minmax(290px,1fr))",
            gridTemplateRows: "repeat(10,minmax(40px,1fr))",
            gridTemplateAreas:gridTemplateLarge,
        }:{
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas:gridTemplateSmall,
        }
    }>
        <Row1/>
        <Row2/>
        <Row3/>
    </Box>
};

export default Dashboard;