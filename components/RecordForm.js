import React, { useState } from "react";
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
  Alert,
  AlertTitle,
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

const RecordForm = ({ props, schedule, token }) => {
  const classes = useStyles();
  // const [alertMessage, setAlertMessage] = useState({ status: "", message: "" });
  // const [showAlert, setShowAlert] = useState(false);
  const courseCodeList = schedule.content.map((item) => {
    return {
      jadwalId: item.idJadwal,
      kode: item.kodeMatkul,
      nama: item.namaMatkul + " - " + item.jenisKelas + item.paralel,
    };
  });

  const initialValues = {
    courseCode: "",
    link: "",
    meeting: "",
    mataKuliah: null,
  };

  const validationSchema = Yup.object({
    mataKuliah: Yup.object()
      .nullable()
      .required("kode mata kuliah wajib diisi!"),
    link: Yup.string().required("link wajib diisi!"),
    meeting: Yup.string().required("pertemuan wajib diisi!"),
  });

  const handleAddRecord = async (values, { setSubmitting }) => {
    console.log(values);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toISOString(); // "2020-06-13T18:30:00.000Z"
    const now = String(today);

    await axios
      .post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/link/record",
        {
          link: values.link,
          jadwal: values.mataKuliah.jadwalId,
          pertemuan: values.meeting,
          tanggal: now,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        // setAlertMessage({ status: "success", message: "sukses brou" });
        console.log(response);
      })
      .catch((error) => {
        // setAlertMessage({ status: "error", message: "error brou" });
        console.log(error.response);
      });
    setSubmitting(false);
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
