import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import SignUpSchema from "../../../components/validation/signUpValidation";
import "./signUpPages.css";
import { toast } from "react-toastify";

const SignUpPage = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-heading">Sign Up</h2>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            // Verileri local storage'a kaydedin
            localStorage.setItem("signUpData", JSON.stringify(values));

            // Kullanıcıya toast bildirimi gösterin
            toast.success("Sign Up successful!");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${
                    errors.email && touched.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control ${
                    errors.password && touched.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`form-control ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <Button type="submit" variant="danger">
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpPage;
