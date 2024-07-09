import { Formik, Field, Form, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";
import SignInSchema from "../../../components/validation/signInValidation";
import { toast } from "react-toastify";
import "./signInPages.css";

const SignInPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    localStorage.setItem("user", JSON.stringify(values));

    toast.success("Sign In successful!");

    setSubmitting(false);
  };

  return (
    <div className="join-form-container">
      <div className="form-wrapper">
        <h2 className="join-now-text">Sign In</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
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
              <Button type="submit" variant="danger" disabled={isSubmitting}>
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInPage;
