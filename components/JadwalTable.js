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
const TAX_RATE = 0.07;

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

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

function createData(matakuliah, sks, ruangan, jam, tipe, peserta) {
  return { matakuliah, sks, ruangan, jam, tipe, peserta };
}

const rows = [
  createData(
    "KOM401 - Analisis Algoritme/1",
    "3 (2-1)",
    "Daring",
    "10:00 - 11:40",
    "K",
    "G61"
  ),
  createData(
    "KOM401 - Analisis Algoritme/1",
    "3 (2-1)",
    "Daring",
    "10:00 - 11:40",
    "K",
    "G61"
  ),
  createData(
    "KOM401 - Analisis Algoritme/1",
    "3 (2-1)",
    "Daring",
    "10:00 - 11:40",
    "K",
    "G61"
  ),
];

// const rows = [
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const JadwalTable = () => {
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
                <TableCell>Mata Kuliah/Kelas Paralel</TableCell>
                <TableCell align="center">SKS</TableCell>
                <TableCell align="center">Ruangan</TableCell>
                <TableCell align="center">Jam</TableCell>
                <TableCell align="center">Tipe</TableCell>
                <TableCell align="center">Peserta</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell align="left" colSpan={6}>
                  Senin
                </TableCell>
              </TableRow>
              {rows.map((row) => (
                <TableRow key={row.matakuliah}>
                  <TableCell component="th" scope="row">
                    {row.matakuliah}
                  </TableCell>
                  <TableCell align="center">{row.sks}</TableCell>
                  <TableCell align="center">{row.ruangan}</TableCell>
                  <TableCell align="center">{row.jam}</TableCell>
                  <TableCell align="center">{row.tipe}</TableCell>
                  <TableCell align="center">{row.peserta}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell align="left" colSpan={6}>
                  Senin
                </TableCell>
              </TableRow>
              {rows.map((row) => (
                <TableRow key={row.matakuliah}>
                  <TableCell component="th" scope="row">
                    {row.matakuliah}
                  </TableCell>
                  <TableCell align="center">{row.sks}</TableCell>
                  <TableCell align="center">{row.ruangan}</TableCell>
                  <TableCell align="center">{row.jam}</TableCell>
                  <TableCell align="center">{row.tipe}</TableCell>
                  <TableCell align="center">{row.peserta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default JadwalTable;
