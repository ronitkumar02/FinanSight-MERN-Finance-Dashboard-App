import BoxHeader from "../../components/BoxHeader";
import DashboardBox from "../../components/DashboardBox"
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from "../../state/api";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";
import FlexBetween from "../../components/FlexBetween";

const Row3 = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[500]];
    const isAboveMediumScreen  = useMediaQuery("(min-width: 900px)")
    const { data: kpiData } = useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();
    const { data: transactionData } = useGetTransactionsQuery();
  
    const pieChartData = useMemo(() => {
      if (kpiData) {
        const totalExpenses = kpiData[0].totalExpenses;
        return Object.entries(kpiData[0].expensesByCategory).map(
          ([key, value]) => {
            return [
              {
                name: key,
                value: value,
              },
              {
                name: `${key} of Total`,
                value: totalExpenses - value,
              },
            ];
          }
        );
      }
    }, [kpiData]);
  
    const productColumns = [
      {
        field: "_id",
        headerName: "id",
        flex: 1,
      },
      {
        field: "expense",
        headerName: "Expense",
        flex: 0.5,
        renderCell: (params) => `$${params.value}`,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 0.5,
        renderCell: (params) => `$${params.value}`,
      },
    ];
  
    const transactionColumns = [
      {
        field: "_id",
        headerName: "id",
        flex: 1,
      },
      {
        field: "buyer",
        headerName: "Buyer",
        flex: 0.67,
      },
      {
        field: "amount",
        headerName: "Amount",
        flex: 0.35,
        renderCell: (params) => `$${params.value}`,
      },
      {
        field: "productIds",
        headerName: "Count",
        flex: 0.1,
        renderCell: (params) =>
          (params.value).length,
      },
    ];
  
    return (
      <>
        <DashboardBox gridArea="g">
          <BoxHeader
            title="List of Products"
            sideText={`${productData?.length} products`}
          />
          <Box
            p="0 0.5rem"
            height={isAboveMediumScreen?"65%":"75%"}
            sx={{
              "& .MuiDataGrid-root": {
                color: palette.grey[300],
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
            }}
          >
            <DataGrid
              columnHeaderHeight={25}
              rowHeight={25}
              hideFooter={true}
              rows={productData || []}
              columns={productColumns}
            />
          </Box>
        </DashboardBox>
        <DashboardBox gridArea="h">
          <BoxHeader
            title="Recent Orders"
            sideText={`${transactionData?.length} latest transactions`}
          />
          <Box
            p="0 0.5rem"
            height={isAboveMediumScreen?"80%":"88%"}
            sx={{
              "& .MuiDataGrid-root": {
                color: palette.grey[300],
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnSeparator": {
                visibility: "hidden",
              },
            }}
          >
            <DataGrid
              columnHeaderHeight={25}
              rowHeight={35}
              hideFooter={true}
              rows={transactionData || []}
              columns={transactionColumns}
            />
          </Box>
        </DashboardBox>
        <DashboardBox gridArea="i">
          <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
          <FlexBetween mt={-2} p="0 1rem" textAlign="center">
            {pieChartData?.map((data, i) => (
              <Box key={`${data[0].name}-${i}`}>
                <PieChart width={isAboveMediumScreen?80:130} height={isAboveMediumScreen?70:120}>
                  <Pie
                    stroke="none"
                    data={data}
                    width={isAboveMediumScreen?80:130}
                    height={isAboveMediumScreen?70:120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index]} />
                    ))}
                  </Pie>
                </PieChart>
                <Typography mt={-1} variant="h5">{data[0].name}</Typography>
              </Box>
            ))}
          </FlexBetween>
        </DashboardBox>
        <DashboardBox gridArea="j" style={{ overflow: 'auto'}}>
            <BoxHeader
                title="Overall Summary and Explanation Data"
                sideText="+15%"
            />
            <Box
                height="15px"
                m={"0 10px"}
                bgcolor={palette.primary[800]}
                borderRadius="1rem"
            >
                <Box
                height="15px"
                bgcolor={palette.primary[600]}
                borderRadius="1rem"
                width="40%"
                ></Box>
            </Box>
            <Typography margin="10px 10px" variant="h6">
            Overall Summary and Explanation Data offers a succinct overview of key metrics and trends, highlighting significant insights and performance indicators. This summary aids in understanding complex data, facilitating informed decision-making and strategic planning.
            </Typography>
            </DashboardBox>

      </>
    );
  };
  
  export default Row3;