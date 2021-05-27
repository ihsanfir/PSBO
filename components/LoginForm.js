import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Grid, Typography, Button, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card_root: {
    borderRadius: "10px",
    border: "5px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username wajib diisi!"),
    password: Yup.string().required("Password wajib diisi!"),
  });

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src="./logo_ipb.svg" alt="Logo IPB" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">IPB Magic Button</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card
            style={{
              borderRadius: 10,
              border: 1,
              borderStyle: "solid",
              borderColor: "#337ab7",
            }}
          >
            <CardContent style={{ backgroundColor: "#337ab7" }}>
              <Typography align="center" style={{ color: "white" }}>
                Login ke Aplikasi
              </Typography>
            </CardContent>
            <CardContent style={{ backgroundColor: "#f9f9f9" }}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ submitForm, isSubmitting }) => (
                  <Form {...props}>
                    <Field
                      component={TextField}
                      name="username"
                      label="Username"
                      type="text"
                      variant="outlined"
                      margin="normal"
                      size="small"
                      fullWidth
                    />

                    <Field
                      component={TextField}
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      margin="normal"
                      size="small"
                      fullWidth
                    />

                    <Button
                      className={classes.submit}
                      color="primary"
                      type="submit"
                      variant="contained"
                      fullWidth={true}
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      <Typography variant="subtitle2">Masuk</Typography>
                    </Button>
                  </Form>
                )}
              </Formik>
              <br />
              <Typography align="center" variant="body2">
                Login dengan user ID IPB
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
