import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, CssBaseline } from "@material-ui/core";
// import RecordButton from "../components/RecordButton";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  rekaman: {
    margin: 20,
    padding: 10,
  },
}));

const RecordButton = withStyles({
  root: {
    background: "#33BAA7",
    borderRadius: 10,
    border: 0,
    color: "#fff",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2);",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />);

const RecordTypography = withStyles({
  root: {
    color: "#212121",
    marginTop: 20,
    textAlign: "center",
  },
})((props) => <Typography {...props} />);

const Rekaman = ({ data, token }) => {
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
        {data.content.map((i) => (
          <Grid item xs={12} sm={6} md={3} key={i.KodeMK}>
            <Link href={'/rekaman/' + i.KodeMK}>
              <a>
                <div
                  style={{
                    width: 180,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <RecordButton variant="contained">
                    <FolderOpenOutlinedIcon style={{ fontSize: 100 }} />
                  </RecordButton>
                  <RecordTypography>{i.NamaMK}</RecordTypography>
                </div>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Rekaman;
