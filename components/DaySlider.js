import {
    Card,
    CardContent,
    Grid,
    Paper,
    Typography,
    Box,
    CssBaseline
} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

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
      padding: 8
    },
    box: {
        backgroundColor: "#f2f2f2",
        display: "block",
        marginRight: 10,
        width: "80px",
        borderRadius: 10,
    }
  }));

const DaySlider = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={1} component={Paper} className={classes.paper} alignItems="center">
            <Grid item className={classes.box}>
                <Typography align="center">
                    Rab
                </Typography>
                <Typography align="center">
                    28
                </Typography>
            </Grid>
            <Grid item className={classes.box}>
                <Typography align="center">
                    Rab
                </Typography>
                <Typography align="center">
                    28
                </Typography>
            </Grid>
            <Grid item className={classes.box}>
                <Typography align="center">
                    Rab
                </Typography>
                <Typography align="center">
                    28
                </Typography>
            </Grid>
        </Grid>
    );
}
 
export default DaySlider;