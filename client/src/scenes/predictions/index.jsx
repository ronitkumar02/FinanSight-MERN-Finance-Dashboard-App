import { useTheme } from "@emotion/react";
import React, { useState, useMemo } from "react";
import DashboardBox from "../../components/DashboardBox";
import { useGetKpisQuery } from "../../state/api";
import FlexBetween from "../../components/FlexBetween";
import { Box, Button, Typography } from "@mui/material";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, CartesianGrid, Legend, Line, Label } from "recharts";
import regression from "regression";


const Predictions = () => {
    const { palette } = useTheme();
    const [isPredictions, setIsPredictions] = useState(false);
    const { data: kpiData } = useGetKpisQuery();

    const formattedData = useMemo(() => {
        if (!kpiData) return [];
        const monthData = kpiData[0].monthlyData;

        const formatted = monthData.map(
            ({ revenue }, i) => [i, revenue]
        );

        const regressionLine = regression.polynomial(formatted, { order: 2 });

        return monthData.map(({ month, revenue }, i) => {
            return {
                name: month,
                "Actual Revenue": revenue,
                "Regression Line": regressionLine.points[i][1],
                "Predicted Revenue": regressionLine.predict(i + 12)[1],
            };
        });
    }, [kpiData]);
  
    return (
      <DashboardBox width="100%" height="93%" p="10px">
        <FlexBetween p="10px">
          <Box>
            <Typography variant="h3">Revenue and Predictions</Typography>
            <Typography variant="h6">
              charted revenue and predicted revenue based on a simple regression model
            </Typography>
          </Box>
          <Button
            onClick={() => setIsPredictions(!isPredictions)}
            sx={{
              color: palette.grey[900],
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
            }}
          >
            {isPredictions?"Hide Predicted Revenue for Next Year":"Show Predicted Revenue for Next Year"}

          </Button>
        </FlexBetween>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            data={formattedData}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom : 30
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
              <Label value="Month" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis
              domain={[12000, 26000]}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            >
              <Label
                value="Revenue in USD"
                angle={-90}
                position="insideLeft"
              />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" />
            <Line
              type="monotone"
              dataKey="Actual Revenue"
              stroke={palette.primary.main}
              strokeWidth={0}
              dot={{ strokeWidth: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Regression Line"
              stroke="#8884d8"
              dot={false}
            />
            {isPredictions && (
              <Line
                strokeDasharray="5 5"
                dataKey="Predicted Revenue"
                stroke={palette.secondary[500]}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
    );
  };
  
  export default Predictions;