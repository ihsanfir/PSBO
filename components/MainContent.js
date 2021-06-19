import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import MainCard from "./Main-card";
import { Grid } from "@material-ui/core";
import styles from "../styles/MainContent.module.css";
import PropTypes from "prop-types";
import moment from "moment";
import { Typography } from "@material-ui/core";

moment.locale("id");

function getSteps(data) {
  const waktuMulai = [];
  data["ListJadwal"].map((prop) => {
    waktuMulai.push(prop["JamMulai"].concat(" - ", prop["NamaMK"]));
  });

  // console.log(waktuMulai);

  return waktuMulai; //ganti jadi jam di hari itu
}

export default function MainContent({ data, token }) {
  function getStepContent(step, data) {
    //step itu index
    // ganti jadi main card yg dimunculin

    return <MainCard data={data["ListJadwal"][step]} token={token} />;
  }

  //   const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const isSuccess = data.success;
  const dataSteps = data?.content ? data.content.data : {
    ListJadwal: []
  } 
  const steps = getSteps(dataSteps);

  // steps.map((jamMulai, index) => {
  //   const jamMulaiObj = moment(jamMulai, 'HH:mm');
  //   if (moment().diff(jamMulaiObj) > 0){
  //     const newCompleted = completed;
  //     newCompleted[index] = true;
  //     setCompleted(newCompleted);
  //   }
  // });

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }
  return (
    <div className={styles.root}>
      {dataSteps.ListJadwal.length == 0 && (
        <Typography align="center">Tidak ada jadwal hari ini!</Typography>
      )}
      {dataSteps.ListJadwal.length > 0 && (
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <div className={styles.container}>
              <Grid container direction="column" spacing={2}>
                <Grid item>{getStepContent(activeStep, data.content.data)}</Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const buttonProps = {};
                    //   if (isStepOptional(index)) {
                    //     buttonProps.optional = <Typography variant="caption">Optional</Typography>;
                    //   }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepButton
                          onClick={handleStep(index)}
                          completed={isStepComplete(index)}
                          {...buttonProps}
                        >
                          {label}
                        </StepButton>
                      </Step>
                    );
                  })}
                </Stepper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

MainContent.propTypes = {
  token: PropTypes.string,
  data: PropTypes.object,
};
