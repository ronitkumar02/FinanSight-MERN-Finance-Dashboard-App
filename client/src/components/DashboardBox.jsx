import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({theme}) => ({
    backgroundColor : theme.palette.background.light,
    borderRadius: "5px",
    boxShadow: "2px 1.5px 2px 0.5px rgba(0,0,0,0.5)"
}));

export default DashboardBox;