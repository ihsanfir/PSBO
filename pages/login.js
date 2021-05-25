import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import LoginForm from '../components/LoginForm'
import { Grid } from '@material-ui/core'

const Login = () => {
    return (
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', backgroundColor: '#f9f9f9'}}
        >
            <Grid item xs={3}>
                <LoginForm />
            </Grid>   
        </Grid>
    );  
}
 
export default Login;
