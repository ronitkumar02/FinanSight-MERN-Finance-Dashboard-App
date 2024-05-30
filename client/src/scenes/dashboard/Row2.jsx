import BoxHeader from "../../components/BoxHeader";
import DashboardBox from "../../components/DashboardBox";
import FlexBetween from "../../components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery } from "../../state/api";
import { Box, Typography, useTheme,useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

const pieData = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 },
  ];
  
  const Row2 = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[300]];
    const { data: operationalData } = useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();
    const isAboveMediumScreen  = useMediaQuery("(min-width: 900px)")
    const operationalExpenses = useMemo(() => {
      return (
        operationalData &&
        operationalData[0].monthlyData.map(
          ({ month, operationalExpenses, nonOperationalExpenses }) => {
            return {
              name: month.substring(0, 3),
              "Operational Expenses": operationalExpenses,
              "Non Operational Expenses": nonOperationalExpenses,
            };
          }
        )
      );
    }, [operationalData]);
  
    const productExpenseData = useMemo(() => {
      return (
        productData &&
        productData.map(({ _id, price, expense }) => {
          return {
            id: _id,
            price: price,
            expense: expense,
          };
        })
      );
    }, [productData]);
  
    return (
      <>
        <DashboardBox gridArea="d">
          <BoxHeader
            title="Operational vs Non-Operational Expenses"
            sideText="+4%"
          />
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={operationalExpenses}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 30,
              }}
            >
              <CartesianGrid vertical={false} stroke={palette.grey[800]} />
              <XAxis
                dataKey="name"
                tickLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickLine={false}
                axisLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                style={{ fontSize: "10px" }}
              />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Non Operational Expenses"
                stroke={palette.tertiary[500]}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Operational Expenses"
                stroke={palette.primary.main}
              />
            </LineChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox gridArea="e">
          <BoxHeader title="Campaigns and Targets"/>
          <FlexBetween>
            <PieChart
              width={isAboveMediumScreen?80:130}
              height={isAboveMediumScreen?70:120}
              margin={isAboveMediumScreen?{
                top: -20,
                right: -10,
                left: 10,
                bottom: 0,
              }:
              {top: 5,
              right: -10,
              left: 10,
              bottom: 0,}}
            >
              <Pie
                stroke="none"
                data={pieData}
                innerRadius={isAboveMediumScreen?10:18}
                outerRadius={isAboveMediumScreen?25:36}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
            <Box mt="-30px" flexBasis="40%" textAlign="center">
              <Typography variant="h5">Target Sales</Typography>
              <Typography variant="h3" color={palette.primary[300]}>
                83
              </Typography>
            </Box>
            <Box flexBasis="40%">
              <Typography mt={isAboveMediumScreen?"-25px":"-5px"} variant="h5">Losses in Revenue</Typography>
              <Typography mt="2px" variant="h6">Losses are down 25%</Typography>
              <Typography  variant="h5">
                Profit Margins
              </Typography>
              <Typography mb="10px" variant="h6">
                Margins are up by 30% from last month.
              </Typography>
            </Box>
          </FlexBetween>
        </DashboardBox>
        <DashboardBox gridArea="f">
          <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{
                top: 10,
                right: 25,
                bottom: 30,
                left: -20,
              }}
            >
              <CartesianGrid stroke={palette.grey[800]} />
              <XAxis
                type="number"
                dataKey="price"
                name="price"
                axisLine={false}
                tickLine={false}
                style={{ fontSize: "10px" }}
                tickFormatter={(v) => `$${v}`}
              />
              <YAxis
                type="number"
                dataKey="expense"
                name="expense"
                axisLine={false}
                tickLine={false}
                style={{ fontSize: "10px" }}
                tickFormatter={(v) => `$${v}`}
              />
              <ZAxis type="number" range={[20]} />
              <Tooltip formatter={(v) => `$${v}`} />
              <Scatter
                name="Product Expense Ratio"
                data={productExpenseData}
                fill={palette.tertiary[500]}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </DashboardBox>
      </>
    );
  };
  
  export default Row2;