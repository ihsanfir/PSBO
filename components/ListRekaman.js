import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
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
    paddingLeft: 10,
  },
  paper: {
    padding: 20,
  },
  header: {
    padding: 20,
    marginTop: 0,
    marginBottom: 40,
  },
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const ListRekaman = ({ records }) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(true);
  const [secondary, setSecondary] = React.useState(false);
  const kuliah = [];
  const praktikum = [];
  records.content.map((record) => {
    if (record.jenisKelas == "P" || record.jenisKelas == "R")
      praktikum.push(record);
    else if (record.jenisKelas == "K") kuliah.push(record);
  });

  const rekamanKuliah = [];
  const rekamanPraktikum = [];

  // split data kuliah
  kuliah.map((items) => {
    items.record.map((item) => {
      rekamanKuliah.push({
        paralel: items.jenisKelas + items.paralel,
        pertemuan: item.pertemuan,
        link: item.link,
      });
    });
  });

  // split data praktikum
  praktikum.map((items) => {
    items.record.map((item) => {
      rekamanPraktikum.push({
        paralel: items.jenisKelas + items.paralel,
        pertemuan: item.pertemuan,
        link: item.link,
      });
    });
  });

  rekamanKuliah.sort((a, b) =>
    a.pertemuan > b.pertemuan ? 1 : b.pertemuan > a.pertemuan ? -1 : 0
  );

  rekamanPraktikum.sort((a, b) =>
    a.pertemuan > b.pertemuan ? 1 : b.pertemuan > a.pertemuan ? -1 : 0
  );

  return (
    <div>
      <CssBaseline />
      <Grid
        container
        component={Paper}
        elevation={0}
        spacing={1}
        className={classes.header}
        direction="column"
      >
        <Grid item>
          <Typography variant="h6">{kuliah[0].namaMatkul}</Typography>
        </Grid>
        <Grid item component={Typography} variant="body2" size="normal">
          Rekaman &gt; {kuliah[0].namaMatkul}
        </Grid>
      </Grid>
      <Grid
        container
        component={Paper}
        elevation={0}
        spacing={1}
        justify="flex-start"
        className={classes.paper}
      >
        <Grid container item xs direction="column">
          <Box className={classes.listHeader}>
            <Typography variant="subtitle1">Kuliah</Typography>
          </Box>
          <div className={classes.demo}>
            <List dense={dense}>
              {rekamanKuliah.length == 0 && (
                <Box padding={2}>
                  <Typography>Belum ada rekaman</Typography>
                </Box>
              )}
              {rekamanKuliah.map((rek) => (
                <ListItem key={rek.pertemuan + rek.paralel}>
                  <ListItemText primary={"Pertemuan " + rek.pertemuan} />
                  <ListItemSecondaryAction>
                    <Link href={rek.link}>
                      <a>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.btn}
                        >
                          {rek.paralel}
                        </Button>
                      </a>
                    </Link>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid container item xs direction="column">
          <Box className={classes.listHeader}>
            <Typography variant="subtitle1">Praktikum</Typography>
          </Box>
          <div className={classes.demo}>
            <List dense={dense}>
              {rekamanPraktikum.length == 0 && (
                <Box padding={2}>
                  <Typography>Belum ada rekaman</Typography>
                </Box>
              )}
              {rekamanPraktikum.map((rek) => (
                <ListItem key={rek.pertemuan + rek.paralel}>
                  <ListItemText primary={"Pertemuan " + rek.pertemuan} />
                  <ListItemSecondaryAction>
                    <Link href={rek.link}>
                      <a>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.btn}
                        >
                          {rek.paralel}
                        </Button>
                      </a>
                    </Link>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ListRekaman;
