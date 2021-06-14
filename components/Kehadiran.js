import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableHead: {
    padding: 0,
    width: 24,
  },
  header: {
    backgroundColor: "#1c7ad8",
    margin: 0,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#FFFFFF",
  },
  head: {
    padding: 2,
    marginRight: 30,
  },
  card: {
    marginLeft: 50,
    marginRight: 100,
  },
  hadir: {
    backgroundColor: "#3dc661",
    color: "#FFFFFF",
    width: 24,
    height: 24,
  },
  tidakHadir: {
    backgroundColor: "#ec3d3c",
    color: "#FFFFFF",
    width: 24,
    height: 24,
  },
});

function createData(hari) {
  return { hari };
}

const headers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];

const Kehadiran = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  return (
    <div>
      {data.content.map((item) => (
        <div key={item[0].kodeMatkul}>
          <Card className={classes.card}>
            <Box className={classes.header}>
              <Typography variant="h6">{item[0].namaMatkul}</Typography>
            </Box>
            <CardContent>
              <TableContainer component={Paper} elevation={0}>
                <Table className={classes.table} aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      {headers.map((header) => (
                        <TableCell
                          className={classes.tableHead}
                          component="th"
                          scope="row"
                          align="center"
                          key={header}
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{item[0].jenisKelas == "K" && "Kuliah" || item[0].jenisKelas == "P" && "Praktikum" || item[0].jenisKelas == "R" && "Responsi" }</TableCell>
                      {headers.map((header) => (
                        <TableCell align="center" key={header}>
                          {item[0].presensi[header]?.isChecked && (
                            <Box className={classes.hadir}>H</Box>
                          )}
                          {!item[0].presensi[header]?.isChecked && (
                            <Box className={classes.tidakHadir}>TH</Box>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      <TableCell>{item[1].jenisKelas == "K" && "Kuliah" || item[1].jenisKelas == "P" && "Praktikum" || item[1].jenisKelas == "R" && "Responsi" }</TableCell>
                      {headers.map((header) => (
                        <TableCell align="center" key={header}>
                          {item[1].presensi[header]?.isChecked && (
                            <Box className={classes.hadir}>H</Box>
                          )}
                          {!item[1].presensi[header]?.isChecked && (
                            <Box className={classes.tidakHadir}>TH</Box>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <br />
        </div>
      ))}

      {/* <Card className={classes.card}>
        <Box className={classes.header}>
          <Typography variant="h6">Analisis Algoritme</Typography>
        </Box>
        <CardContent>
          <TableContainer component={Paper} elevation={0}>
            <Table className={classes.table} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  {headers.map((header) => (
                    <TableCell
                      className={classes.tableHead}
                      component="th"
                      scope="row"
                      align="center"
                      key={header}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Kuliah</TableCell>
                  {headers.map((header) => (
                    <TableCell align="center" key={header}>
                      <Box className={classes.hadir}>H</Box>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell>Praktikum</TableCell>
                  {headers.map((header) => (
                    <TableCell align="center" key={header}>
                      <Box className={classes.tidakHadir}>TH</Box>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Kehadiran;
