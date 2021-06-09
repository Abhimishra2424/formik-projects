import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import '../App.css'


const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("last name is required "),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("email is requried"),
});

const Materialui = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          margin="normal"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          margin="normal"
          variant="outlined"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          id="email"
          name="email"
          label="Email "
          margin="normal"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Materialui;
