import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Container,
  CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(1),
    backgroundColor: "#2196F3",
  },
  listHeader: {
    backgroundColor: "#f2f2f2",
    paddingLeft: 10
  },
  paper: {
    padding: 20
  },
  header: {
    padding: 20,
    marginTop: 0,
    marginBottom: 40,

  }
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const ListRekaman = () => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(true);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
      <CssBaseline />
      <Grid container component={Paper} elevation={0} spacing={1} className={classes.header} direction="column">
          <Grid item>
            <Typography variant="h6">
              Sistem Cerdas
            </Typography>
          </Grid>
            <Grid item component={Typography} variant="body2" size="normal">
              Rekaman &gt; Sistem Cerdas
            </Grid>
      </Grid>
      <Grid container component={Paper} elevation={0} spacing={1} justify="flex-start" className={classes.paper}>
        <Grid container item xs direction="column">
            <Box className={classes.listHeader}>
              <Typography variant="subtitle1">Kuliah</Typography>
            </Box>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemText primary="Pertemuan 1" />
                    <ListItemSecondaryAction>
                      <Button
                        variant="contained"
                        size="small"
                        href="#contained-buttons"
                        color="primary"
                        className={classes.btn}
                      >
                        K1
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        href="#contained-buttons"
                        color="primary"
                        className={classes.btn}
                      >
                        K2
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </div>
        </Grid>
        <Grid container item xs direction="column">
            <Box className={classes.listHeader}>
              <Typography variant="subtitle1">Praktikum</Typography>
            </Box>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemText primary="Pertemuan 1" />
                    <ListItemSecondaryAction>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        href="#contained-buttons"
                        className={classes.btn}
                      >
                        K1
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        href="#contained-buttons"
                        className={classes.btn}
                      >
                        K2
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ListRekaman;
