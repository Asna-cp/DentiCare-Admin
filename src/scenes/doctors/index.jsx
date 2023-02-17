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

const Doctors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [doctors, setDoctors] = useState([]);

  async function getDoctors() {
    axios
      .get("http://localhost:8080/api/v1/user/alldoctors")
      .then((response) => {
        setDoctors(response?.data);
      });
  }
  useEffect(() => {
    getDoctors();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "doctorName",
      headerName: "Doctor Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "specialist",
      headerName: "Specialist",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "discription",
      headerName: "Discription",
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
      <Header title="DOCTORS" subtitle="Managing The Doctors" />
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
          rows={doctors}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Doctors;
