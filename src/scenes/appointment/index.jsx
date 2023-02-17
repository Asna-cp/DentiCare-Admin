import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ViewAppointments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [appointments, setAppointments] = useState([]);
  async function ViewAppointments() {
    axios
      .get("http://localhost:8080/admin/allappointments")
      .then((response) => {
        setAppointments(response?.data);
      });
  }

  useEffect(() => {
    ViewAppointments();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
      flex: 1,
    },

    // {
    //   field: "update",
    //   headerName: "Update",
    //   type: "number",
    //   flex: 1,
    //   renderCell: ({ row: { access } }) => {
    //     return (
    //       <Box
    //         width="60%"
    //         m="0 auto"
    //         p="10px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access === "admin"
    //             ? colors.greenAccent[600]
    //             : colors.greenAccent[700]
    //         }
    //         borderRadius="4px"
    //       ></Box>
    //     );
    //   },
    // },
  ];

  return (
    <Box m="20px">
      <Header title="APPOINTMENTS" subtitle="Managing The Appointments" />
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
          "&.MuiDataGrid-toolbarContainer.MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={appointments}
          columns={columns}
          // components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default ViewAppointments;
