import { Formik, Form, FieldArray } from "formik";
import "./Formtest.css";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Schema = yup.object({
  email: yup.string().required("enter the gmail"),
});

const InviteFriends = () => (
  <div>
    <h1>Invite Friends</h1>
    <Formik
      initialValues={{ friends: [ {name: "Abhi",mobileNumber: "123"},{name: "Ashwath",mobileNumber: "456"}] }}
      validationSchema={Schema}
      onSubmit={(values) => console.log(values)}
      render={({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <FieldArray
            name="friends"
        
            render={({ remove, push }) => (
              <>
                {values.friends.map((friend, i) => (
                  <div key={i}>
                    <TextField
                      name={`friends[${i}].name`}
                      label="Name"
                      variant="outlined"
                      margin="normal"
                      value={friend.name}
                      onChange={handleChange}
                    />
                    <TextField
                      name={`friends[${i}].mobileNumber`}
                      label="Number"
                      variant="outlined"
                      margin="normal"
                      value={friend.mobileNumber}
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
          <Button variant="contained" color="primary" type="submit">
            Invite Friends
          </Button>
        </Form>
      )}
    />
  </div>
);

export default InviteFriends;
