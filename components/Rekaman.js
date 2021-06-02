import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, CssBaseline } from "@material-ui/core";
import { recordButton } from "../components/RecordButton";

const useStyles = makeStyles((theme) => ({
  rekaman: {
    margin: 20,
    padding: 10,
  },
}));

const Rekaman = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Grid
        className={classes.rekaman}
        container
        spacing={2}
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3}>{recordButton}</Grid>
        <Grid item xs={12} sm={6} md={3}>{recordButton}</Grid>
        <Grid item xs={12} sm={6} md={3}>{recordButton}</Grid>
        <Grid item xs={12} sm={6} md={3}>{recordButton}</Grid>
        
        <Grid item xs={12} sm={6} md={3}>{recordButton}</Grid>
        <Grid item xs={12} sm={6} md={3}>{recordButton}</Grid>
        <Grid item xs={12} sm={6} md={3}>{recordButton}</Grid>
       
      </Grid>
    </div>
  );
};

export default Rekaman;
