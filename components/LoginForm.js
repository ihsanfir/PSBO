import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Box, Grid, Typography, Button, Card, CardContent, CircularProgress  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from 'universal-cookie';

const useStyles = makeStyles((theme) => ({
  card_root: {
    borderRadius: "10px",
    border: "5px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  circularProgress: {
    marginRight: theme.spacing(1.5),
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const [alertMessage, setAlertMessage] = useState({ status: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username wajib diisi!"),
    password: Yup.string().required("Password wajib diisi!"),
  });

  const handleLogin = async ({ username, password }, { setSubmitting }) => {
    // console.log(username, password)
    await axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + "/login", {
        username,
        password,
      })
      .then((response) => {
        const user = response.data.content.data;
        const token = user.Token;
        const cookies = new Cookies();
        
        setAlertMessage({ status: "success", message: "Login berhasil!" });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        cookies.set('auth-token', token, {path: '/'})
        cookies.set('user', user, {path: '/'})
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      })
      .catch((error) => {
        setAlertMessage({
          status: "error",
          message: "Pengguna tidak ditemukan!",
        });
        console.log(error);
      });
    setShowAlert(true);
    setSubmitting(false);
  };

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
          {showAlert && (
            <Box my={3}>
              <Alert severity={alertMessage.status}>
                {alertMessage.status === "success" ? (
                  <Box>
                    <AlertTitle>{alertMessage.message}</AlertTitle>
                    <Box display="flex" alignItems="center">
                      <CircularProgress
                        className={classes.circularProgress}
                        size={14}
                      />
                      <Typography variant="body2">
                        Wait a second, redirecting to dashboard...
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="body2">
                    {alertMessage.message}
                  </Typography>
                )}
              </Alert>
            </Box>
          )}
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
                onSubmit={handleLogin}
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
