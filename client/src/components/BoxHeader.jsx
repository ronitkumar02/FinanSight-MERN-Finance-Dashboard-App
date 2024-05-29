import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";

const BoxHeader = (props) => {
    const { palette } = useTheme();

    return (
        <FlexBetween style={{color: palette.grey[400]}}>
            <FlexBetween>
                {props.icons}
                <Box style={{ margin: "8px 4px"}}>
                    <Typography variant="h4">
                        {props.title}
                    </Typography>
                    <Typography variant="h6">
                        {props.subtitle ? props.subtitle : ""}
                    </Typography>
                </Box>
            </FlexBetween>
            <Typography variant="h6" marginRight={"8px"}>
                {props.sideText ? props.sideText : ""}
            </Typography>
        </FlexBetween>
    );
};

export default BoxHeader;
