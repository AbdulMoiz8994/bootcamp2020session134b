import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';

import service5 from '../../Images/services-5.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: 'black'
    },
    img: {
        height: '25rem',
        margin: '3rem'
    },
    heading: {
        color: 'white',
        fontFamily: 'Comfortaa, cursive',
        fontSize: '3rem',
        margin: '2rem',
        marginTop: '6rem',
        marginLeft: '2rem',
        textAlign: 'center',
    },
    para: {
        color: 'white',
        margin: '2rem',
        marginTop: '7%',
        fontFamily: 'Comfortaa, cursive',
        textAlign: 'center',
        fontSize: '1.6rem',
        marginRight: '100px'
    }
}))


export const Contant4 = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box data-aos="fade-up">
                <img src={service5} alt="service5" className={classes.img} />
            </Box>
            <Box data-aos="fade-up">
                <Typography variant="h3" className={classes.heading}>Build Oppurtunity</Typography>
                <p className={classes.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sequi qui velit fugit, eum aliquam, expedita harum ipsa animi impedit consequuntur quia! Nemo ipsum incidunt blanditiis doloremque quod! Facilis, debitis?</p>
            </Box>
        </div>
    )
}
