import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
} from "@material-ui/core";
import { Field, FieldAttributes, Form, Formik, useField } from "formik";
import * as Yup from "yup";

type MyRadioProps = {
  label: string;
} & FieldAttributes<{}>;

type MyCheckBoxProps = {
  label: string;
} & FieldAttributes<{}>;

type MyTextFieldProps = {
  label: string;
} & FieldAttributes<{}>;

type MySelectProps = {
  InputLabel: string;
} & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyCheckBox: React.FC<MyCheckBoxProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);

  return <FormControlLabel control={<Checkbox {...field} />} label={label} />;
};

const MySelect: React.FC<MySelectProps> = ({ ...props }) => {
  const [field] = useField<{}>(props);
  return (
    <FormControl>
      <InputLabel>Age</InputLabel>
      <Select {...field}>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={21}>Twenty- one</MenuItem>
        <MenuItem value={22}>Twenty Two</MenuItem>
        <MenuItem value={23}>Twenty Three</MenuItem>
        <MenuItem value={24}>Twenty four</MenuItem>
        <MenuItem value={25}>Twenty five</MenuItem>
      </Select>
    </FormControl>
  );
};

const MyCity: React.FC<MySelectProps> = ({ ...props }) => {
  const [field] = useField<{}>(props);

  return (
    <FormControl>
      <InputLabel>City</InputLabel>
      <Select {...field}>
        <MenuItem value={"mumbai"}>mumbai</MenuItem>
        <MenuItem value={"Delhi"}>Delhi</MenuItem>
      </Select>
    </FormControl>
  );
};

const MyTextField: React.FC<MyTextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      label={label}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};


// const totalMarks = English + maths + science;
// const percentage =(totalMarks / 300) * 100;


const Validation = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required(" last Name is Required"),
  email: Yup.string().email("Invalid email.").required("Email is Required"),
  isTall: Yup.boolean()
    .oneOf([true], "The Terms and condition must be accepted")
    .required("The Terms and conditions must be accepted"),
  degree: Yup.string().required("one degree required"),
  gender: Yup.string().required("must select gender"),
  age: Yup.string().required("Select the age "),
  city: Yup.string().required("Select The city"),
});

const App: React.FC = () => {


  const clculateTotal= (subjects: any[]) =>{
    let totalMarks =0;
    subjects.forEach(x=>totalMarks+=x)    
    return totalMarks;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          isTall: false,
          degree: [],
          gender: "",
          age: [""],
          city: [""],
          subject: [0,0,0],
        }}
        validationSchema={Validation}
        onSubmit={(data) => {
          console.log("submit:", data);
        }}
      >
        {({ values,handleChange,handleSubmit }) => (
          <Form>
            <MyTextField name="firstName" type="input" label="First name" />
            <div>
              <MyTextField name="lastName" type="input" label="Last Name" />
            </div>
            <MyTextField name="email" type="email" label="Enter your email" />
            <div>Degree:</div>
            <MyCheckBox
              name="degree"
              type="checkbox"
              value="bachelor"
              label="bachelor"
            />
            <MyCheckBox
              name="degree"
              type="checkbox"
              value="master"
              label="master"
            />
            {/* <MyCheckBox
              name="degree"
              type="checkbox"
              value="postgraduate"
              label="postgraduate"
              
            /> */}
            <Checkbox
              name="degree"
              value="postgraduate"
              //  label="postgraduate"
            />
            postgraduate
            <div>gender:</div>
            <MyRadio name="gender" type="radio" value="male" label="male" />
            <MyRadio name="gender" type="radio" value="female" label="female" />
            <div>
              <div>age:</div>
              <div>
                <MySelect name="age" InputLabel="age" />
              </div>

              <div>City:</div>
              <div>
                <MyCity name="city" InputLabel="city" value="city" />
              </div>
              <div>
                <MyCheckBox
                  name="isTell"
                  type="checkbox"
                  value="I accepted."
                  label="Terms and conditions"
                />
              </div>
              <div>subject marks</div>
              <TextField
                name="subject[0].me"
                type="number"
                onChange={handleChange}
                label="English"
                variant="outlined"
                margin="normal"
                value = {values.subject[0]}
              />
              <TextField
                name="subject[1]"
                label="maths"
                type="number"
                variant="outlined"
                onChange={handleChange}
                margin="normal"
                value = {values.subject[1]}
              />
              <TextField
                name="subject[2]"
                type="number"
                label="science"
                variant="outlined"
                onChange={handleChange}
                margin="normal"
                value = {values.subject[2]}
              />
              {clculateTotal(values.subject)}
              <Button variant="contained" type="submit">
                submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
