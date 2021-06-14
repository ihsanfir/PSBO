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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableHead: {
    backgroundColor: "#F2F2F2",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#1c7ad8",
    margin: 0,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#FFFFFF",
  },
  card: {
    marginLeft: 50,
    marginRight: 100,
  },
});

const JadwalTable = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.header}>
        <Typography variant="h6">Jadwal Kuliah Mahasiswa</Typography>
      </Box>
      <CardContent>
        <TableContainer component={Paper} elevation={0}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell>Mata Kuliah</TableCell>
                <TableCell align="center">Kelas Paralel</TableCell>
                <TableCell align="center">Ruangan</TableCell>
                <TableCell align="center">Jam</TableCell>
                <TableCell align="center">Tipe</TableCell>
              </TableRow>
            </TableHead>
            {data.map((d) => (
              <TableBody key={d.Hari}>
                <TableRow>
                  <TableCell align="left" colSpan={6}>
                    <Box fontWeight="fontWeightBold">
                      {d.Hari}
                    </Box>
                  </TableCell>
                </TableRow>
                {d.ListJadwal.map((row) => (
                  <TableRow key={row.JadwalId}>
                    <TableCell component="th" scope="row">
                      <Box paddingLeft={2}>
                        {row.NamaMK}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      {row.TipeKelas}
                      {row.KelasParalel}
                    </TableCell>
                    <TableCell align="center">{row.Ruang}</TableCell>
                    <TableCell align="center">
                      {row.JamMulai} - {row.JamSelesai}
                    </TableCell>
                    <TableCell align="center">{row.TipeKelas}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default JadwalTable;
