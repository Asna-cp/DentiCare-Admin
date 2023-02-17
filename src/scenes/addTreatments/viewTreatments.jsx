import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../components/Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ViewTreatments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [treatments, setTreatments] = useState([]);

  async function ViewTreatments() {
    axios
      .get("http://localhost:8080/api/v1/user/alltreatments")
      .then((response) => {
        setTreatments(response?.data);
      });
  }
  useEffect(() => {
    ViewTreatments();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "treatmentname",
      headerName: "Treatment Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "discription",
      headerName: "Discription",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "about",
      headerName: "About",
      flex: 1,
    },

    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Button size="md" sx={{backgroundColor:"grey"}}>Remove</Button>
          
          // <Button
          //   width="60%"
          //   m="0 auto"
          //   p="5px"
          //   display="flex"
          //   justifyContent="center"
          //   backgroundColor={
          //     access === "admin"
          //       ? colors.greenAccent[600]
          //       : colors.greenAccent[700]
          //   }
          //   borderRadius="4px"
          // >
          //   {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          //   {access === "manager" && <SecurityOutlinedIcon />}
          //   {access === "client" && <LockOpenOutlinedIcon />}
          //   <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
          //     {access}
          //   </Typography>
          // </Button>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TREATMENTS" subtitle="Managing The Treatments" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "&.MuiDataGrid-root": {
            border: "none",
          },
          "&.MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "&.name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={treatments}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default ViewTreatments;
