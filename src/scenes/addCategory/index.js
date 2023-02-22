import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";


const AddCategory = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const initialValues = {
        categoryName: "",
     
      };
    const handleFormSubmit = (values) => {
      axios
        .post(`${process.env.REACT_APP_PORT}/addCategory`, values)
        .then((response) => {
          if (response) {
            window.location.reload();
          }
        })
        .catch((error) => {});
    };
  
  return (
    <Box m="20px">
    <Header title="Add Category" subtitle="Add New Category" />
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
    //   validationSchema={categorySchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Category Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.categoryName}
              name="categoryName"
              error={!!touched.categoryName && !!errors.categoryName}
              helperText={touched.categoryName && errors.categoryName}
              sx={{ gridColumn: "span 2" }}
            />

           
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Add New Category
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  </Box>
  )
}

export default AddCategory
