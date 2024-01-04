import { Box, Button } from "@mui/material";
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
  const [change, setChange] = useState(false);

  async function ViewAppointments() {
    axios
      .get(`${process.env.REACT_APP_PORT}/allappointments`)
      .then((response) => {
        setAppointments(response?.data);
      });
  }

  useEffect(() => {
    ViewAppointments();
  }, []);

  //CANCEL APPOINTMENTS
  function cancelAppointment(id) {
    axios
      .post(`${process.env.REACT_APP_PORT}/cancelAppointment/${id}`)
      // .post(`http://localhost:8080/admin/removeDoctor/${id}`)
      .then(change === true ? setChange(false) : setChange(true));
  }
  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "firstName",
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
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <Button
            onClick={() => cancelAppointment(cellValues.row._id)}
            size="md"
            sx={{ backgroundColor: "grey" }}
          >
            cancel
          </Button>
        );
      },
    },
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
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default ViewAppointments;
