import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField, Select } from "formik-material-ui";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Paper,
  Box,
  TextField as TextFielded,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "formik-material-ui-lab";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card_root: {
    borderRadius: "10px",
    border: "5px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "300px",
  },
  formRecord: {
    padding: 20,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: "#fafafa",
  },
  formControl: {
    width: "100%",
  },
}));

const courseCodeList = [
  {
    kode: "KOM123",
    nama: "Analisis Algoritme",
  },
  {
    kode: "KOM345",
    nama: "Basis Data",
  },
  {
    kode: "IPB400",
    nama: "KKN-T",
  },
];

const RecordForm = (props) => {
  const classes = useStyles();
  const initialValues = {
    courseCode: "",
    paralel: "",
    link: "",
    meeting: "",
    mataKuliah: null,
  };

  const validationSchema = Yup.object({
    mataKuliah: Yup.object()
      .nullable()
      .required("kode mata kuliah wajib diisi!"),
    paralel: Yup.string().required("paralel wajib diisi!"),
    link: Yup.string().required("link wajib diisi!"),
    meeting: Yup.string().required("pertemuan wajib diisi!"),
  });

  const handleAddRecord = async (values, { setSubmitting }) => {
    console.log(values);
    await axios
      .post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/link/record",
        {
          link: values.link,
          jadwal: "9999",
          pertemuan: values.meeting,
          tanggal: "2021-08-01",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + process.env.NEXT_PUBLIC_TOKEN_ADMIN,
          },
        }
      )
      .then((response) => {
        // setAlertMessage({ status: 'success', message: 'sukses brou' })
        console.log(response);
      })
      .catch((error) => {
        // setAlertMessage({ status: 'error', message: 'error brou' })
        console.log(error.response);
      });
    setSubmitting(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleAddRecord}
    >
      {({ submitForm, isSubmitting }) => (
        <Card className={classes.formRecord}>
          <Form {...props}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid
                container
                item
                xs={12}
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item md={2}>
                  <InputLabel htmlFor="mataKuliah">Kode Mata Kuliah</InputLabel>
                </Grid>
                <Grid item md={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item md={9}>
                  <Field
                    name="mataKuliah"
                    component={Autocomplete}
                    options={courseCodeList}
                    getOptionLabel={(option) => option.nama}
                    renderInput={(params) => (
                      <Field
                        component={TextField}
                        {...params}
                        name="mataKuliah"
                        variant="filled"
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item md={2}>
                  <InputLabel htmlFor="paralel">Paralel</InputLabel>
                </Grid>
                <Grid item md={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item md={9}>
                  <Field
                    component={TextField}
                    name="paralel"
                    type="text"
                    variant="filled"
                    margin="normal"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item md={2}>
                  <InputLabel htmlFor="link">Link</InputLabel>
                </Grid>
                <Grid item md={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item md={9}>
                  <Field
                    component={TextField}
                    name="link"
                    type="text"
                    variant="filled"
                    margin="normal"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item md={2}>
                  <InputLabel htmlFor="meeting">Pertemuan</InputLabel>
                </Grid>
                <Grid item md={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item md={9}>
                  <Field
                    component={TextField}
                    name="meeting"
                    type="text"
                    variant="filled"
                    margin="normal"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  className={classes.submit}
                  color="primary"
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  <Typography variant="subtitle2">Submit</Typography>
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export default RecordForm;
