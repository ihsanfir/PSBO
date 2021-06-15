import { Button, Grid, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert"
import styles from '../styles/MainCard.module.css'
import axios from "axios"

const MainCard = (props) => {
    const handleSubmitPresensi = async () => {
        // alert("Lagi proses ya gan\n" + props.data['JadwalId']);
        await axios
          .post(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/presensi/check",
            {
              jadwal: props.data['JadwalId'],
              pertemuan: 14
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.token}`,
              },
            }
          )
          .then((response) => {
            alert(response.data.message);
            console.log(response.data.message);
          })
          .catch((error) => {
            alert(error.response.data.message);
            console.log(error.response.data.message);
          });
      };

    return (
        <div className={styles.container}>
            {/* {console.log(props.token)} */}
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
                        <Typography>{props.data['Ruang']}</Typography> {/* ini harusnya pertemuan, nanti kalo udh ada diganti */}
                        <br/>
                        <Typography>{props.data['KodeMK']} | {props.data['TipeKelas']}{props.data['KelasParalel']}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={1} justify='flex-end' alignItems='flex-end' container>
                    {/* {console.log(props.data['vidcon']['link'])} */}
                    {props.data['vidcon'][1] != null ? (
                        <Button variant='contained' color='primary' href={props.data['vidcon'][1]} target="blank_" onClick={() => {handleSubmitPresensi()}}>Join</Button>
                    ) : (
                        <Button variant='contained' color='primary' href="" disabled>Join</Button>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default MainCard;