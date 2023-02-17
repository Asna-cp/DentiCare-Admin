import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";
import { allpatient } from "../../actions/patient";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allpatient());
  }, [dispatch]);

  const patient = useSelector((state) => state.patient);
  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      justifyContent: "center",
    },

    {
      field: "email",
      headerName: "Email ",
      flex: 1,
    },
    {
    field: "access",
    headerName: "Access Level",
    flex: 1,
    renderCell: ({ row: { access } }) => {
      return (
        <Button size="md" sx={{backgroundColor:"grey"}}>Remove</Button>
      );
    },
  },
  ];

  return (
    <Box m="20px">
      <Header title="PATIENTS" subtitle="Managing The Patients" />
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
          rows={patient}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Team;
