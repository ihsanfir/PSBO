import { Button, Grid, Typography } from "@material-ui/core";
import styles from '../styles/MainCard.module.css'

const MainCard = (props) => {
    return (
        <div className={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs={1} justify='space-between' container direction='column'>
                    <Typography>{props.data['JamMulai']}</Typography>
                    <Typography>{props.data['JamSelesai']}</Typography>
                    {/* <img src="LINE.png" className={styles.img} alt='garis' /> */}
                </Grid>
                <Grid item xs container direction='column' spacing={2}>
                    <Grid item>
                        <Typography variant='h5'>{props.data['NamaMK']}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Pertemuan 10</Typography>
                        <br/>
                        <Typography>{props.data['KodeMK']} | {props.data['TipeKelas']}{props.data['KelasParalel']}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={1} justify='flex-end' alignItems='flex-end' container>
                    <Button variant='contained' color='primary' href="www.google.com">Join</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainCard;