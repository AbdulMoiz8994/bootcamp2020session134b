import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';

import service7 from '../../Images/services-7.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    image_service_7: {
        height: '24rem',
        margin: '5rem',
        marginTop: '6rem',
        marginRight: '120px'
    },
    heading: {
        fontFamily: 'Comfortaa, cursive',
        fontSize: '4rem',
        margin: '4rem',
        marginTop: '6rem',
        textAlign: 'center'
    },
    para: {
        fontSize: '1.6rem',
        margin: '1rem',
        marginTop: '6%',
        fontFamily: 'Comfortaa, cursive',
        textAlign: 'center'
    }
}))

export const Contant3 = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Box data-aos="fade-right">
                <Typography variant="h3" noWrap className={classes.heading}>Work On Skills</Typography>
                <p className={classes.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, vitae repellat! Praesentium voluptas esse culpa cumque laboriosam voluptatum nulla aut maiores minus delectus illum, veritatis dicta quos fuga, rerum consectetur!</p>
            </Box>
            <Box>
                <img data-aos="fade-left" src={service7} alt="servce7" className={classes.image_service_7} />
            </Box>
        </div>
    )
}
