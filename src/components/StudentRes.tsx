import type { FC } from "react";
import * as Yup from "yup";
import { FieldArray, Form, Formik } from "formik";
import { Button, TextField, Typography } from "@material-ui/core";


const StudentRes: FC = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: [""],
        address: "",
        schoolName: "",
        collageName: "",
        gender: { male: "", female: "" },
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("Frist Name is required"),
        lastName: Yup.string().required("Frist Name is required"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(225)
          .required("Email is required"),
        phone: Yup.number().required("Number is required"),
        address: Yup.string().required("Address is required"),
        schoolName: Yup.string().required("School Name is required"),
        collageName: Yup.string().required("collage Name is required"),
        gender: Yup.string().required(""),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
      render={({
        handleChange,
        handleSubmit,
        handleBlur,
        // isSubmitting,
        errors,
        touched,
        values,
      }) => (
        <>
        <Typography style={{textAlign:"center"}}>Student detalis</Typography>
          <Form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              autoFocus
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              label=" First Name"
              margin="normal"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.firstName}
              variant="outlined"
            />
            <TextField
              autoFocus
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              label=" lastName"
              margin="normal"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.lastName}
              variant="outlined"
            />
            <TextField
              autoFocus
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              label=" email"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <FieldArray
              name="phone"
              render={({ remove, push }) => (
                <>
                  {values.phone.map((phonenum, i) => (
                    <div key={i}>
                      <TextField
                        name={`phone[${i}]`}
                        label="Number"
                        variant="outlined"
                        margin="normal"
                        value={phonenum}
                        type="number"
                        onChange={handleChange}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={() => remove(i)}
                      >
                        X
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={() => push("")}
                  >
                    Add friend
                  </Button>
                </>
              )}
            />
            <TextField
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
              label="address"
              margin="normal"
              name="address"
              onBlur={handleBlur}
              onChange={handleChange}
              type="address"
              value={values.address}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.schoolName && errors.schoolName)}
              helperText={touched.schoolName && errors.schoolName}
              label="schoolName"
              margin="normal"
              name="schoolName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="schoolName"
              value={values.schoolName}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.collageName && errors.collageName)}
              helperText={touched.collageName && errors.collageName}
              label="collageName"
              margin="normal"
              name="collageName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="collageName"
              value={values.collageName}
              variant="outlined"
            />

            <Button
              color="primary"
              size="medium"
              type="submit"
              variant="contained"
              //   disabled={isSubmitting}
            >
              submit
            </Button>
          </Form>
        </>
      )}
    />
  );
};

export default StudentRes;
