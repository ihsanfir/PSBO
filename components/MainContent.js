import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import MainCard from './Main-card';
import { Grid } from '@material-ui/core'
import styles from '../styles/MainContent.module.css'

// const data = {
//     "Hari": "Rabu",
//     "Tanggal": "2021-06-16T00:00:00",
//     "JenisKegiatan": "Kuliah",
//     "ListJadwal": [
//         {
//             "JadwalId": 182657,
//             "KodeMK": "KOM324",
//             "NamaMK": "Pengolahan Citra Digital",
//             "TipeKelas": "K",
//             "KelasParalel": "2",
//             "JamMulai": "8:00",
//             "JamSelesai": "9:40",
//             "Ruang": "Daring",
//             "IsDaring": true,
//             "IsPresensiMandiri": true
//         },
//         {
//             "JadwalId": 182676,
//             "KodeMK": "KOM334",
//             "NamaMK": "Pengembangan Sistem Berorientasi Objek",
//             "TipeKelas": "K",
//             "KelasParalel": "2",
//             "JamMulai": "13:00",
//             "JamSelesai": "14:40",
//             "Ruang": "Daring",
//             "IsDaring": true,
//             "IsPresensiMandiri": true
//         },
//         {
//             "JadwalId": 182646,
//             "KodeMK": "KOM312",
//             "NamaMK": "Komunikasi Data dan Jaringan Komputer",
//             "TipeKelas": "P",
//             "KelasParalel": "1",
//             "JamMulai": "15:30",
//             "JamSelesai": "17:30",
//             "Ruang": "Daring",
//             "IsDaring": true,
//             "IsPresensiMandiri": true
//         }
//     ]
// }

function getSteps(data) {
    const waktuMulai = [];
    data['ListJadwal'].map((prop) => {
        waktuMulai.push(prop['JamMulai'].concat(" - ", prop['NamaMK']));
    });

    // console.log(waktuMulai);

    return waktuMulai; //ganti jadi jam di hari itu
}

function getStepContent(step, data) { //step itu index
    // ganti jadi main card yg dimunculin

    return <MainCard data={data['ListJadwal'][step]} />
}

export default function MainContent({ data }) {
//   const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps(data);

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
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <div className={styles.container}>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                {getStepContent(activeStep, data)}
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item>
            <Grid container direction='column' spacing={2}>
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
    </div>
  );
}
