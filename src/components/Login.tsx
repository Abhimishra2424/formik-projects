import type { FC } from "react";
import * as Yup from "yup";
import { FieldArray, Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";

const Login: FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        phone: [""],
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(225)
          .required("Email is required"),
        phone: Yup.number().required("Number is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values) => {
        
        console.log(values);
      }}
      render={({
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
        touched,
        values,
      }) => (
        <>
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
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              label="Email Address"
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
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />

            <Button
              color="primary"
              size="medium"
              type="submit"
              variant="contained"
              disabled={isSubmitting}
            >
              submit
            </Button>
          </Form>
        </>
      )}
    />
  );
};

export default Login;
