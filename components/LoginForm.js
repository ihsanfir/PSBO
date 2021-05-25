import React from 'react';
import { 
    FormGroup,
    Grid,
    TextField,
    Typography,
    Button,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardHeader
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import { BorderColorOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    card_root: {
        borderRadius: '10px',
        border: '5px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

const LoginForm = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid 
                container
                spacing={2}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <img src="./logo_ipb.svg" alt="Logo IPB" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        IPB Magic Button
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Card
                        style={{
                            borderRadius: 10,
                            border: 1,
                            borderStyle: 'solid',
                            borderColor: '#337ab7',
                        }}
                    >
                        <CardContent
                            style={{ backgroundColor: '#337ab7' }}
                        >
                            <Typography
                                align="center"
                                style={{ color:"white" }}
                            >
                                Login ke Aplikasi
                            </Typography>
                        </CardContent>
                        <CardContent style={{ backgroundColor: '#f9f9f9' }}>
                            <form>
                                <TextField
                                    id="username"
                                    label="Username"
                                    variant="filled"
                                    margin="normal"
                                    size="small"
                                    fullWidth
                                    required
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="filled"
                                    margin="normal"
                                    size="small"
                                    fullWidth
                                    required
                                />
                                <Button
                                    className={ classes.submit}
                                    style={{
                                        backgroundColor: '#007bfb',
                                        color: 'white',
                                    }}
                                    type="submit"
                                    variant="contained"
                                    href="#contained-buttons"
                                    fullWidth
                                    >
                                    Masuk
                                </Button>
                            </form>
                            <br />
                            <Typography
                                align="center"
                                variant="body2"
                            >
                                Login dengan user ID IPB
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default LoginForm;