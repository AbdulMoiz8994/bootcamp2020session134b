import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Brain from '../../Images/brain.svg';
import Base from '../../Images/Base.svg'

import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',

    },
    heading: {
        fontSize: '5rem',
        color: 'black',
        fontFamily: 'Comfortaa, cursive',

    },
    leftbox: {
        margin: '10rem',
        color: 'black',
    },
    p: {
        fontSize: '2rem',
        fontFamily: 'Comfortaa, cursive',

    },
    btn: {
        fontSize: '2rem',
        borderRadius: '50px',
        width: '40%',
        height: '50px',
        marginLeft: '20px',
        backgroundColor: '#5A20CB',
        borderColor: '#5A20CB',
        borderBottom: '#5A20CB',
        borderRight: '#5A20CB',
        color: 'white',
        cursor: 'pointer',
        fontFamily: 'Comfortaa, cursive',

    },
    rightbox: {
        marginTop: '4rem',
        marginLeft: '5rem',
    },
    base: {
        marginTop: '-28rem',
        width: '40vw',
        marginLeft: '-8rem'


    },
    brain: {
        marginLeft: '-3.6rem'
    }
}));

export const Contant1 = () => {
    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'translateY(0px)' },
            { transform: 'translateY(80px)' },

        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',

        }
    })




    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box component="div" className={classes.leftbox}>
                <Typography Variant="h3" noWrap className={classes.heading}>Web Animation</Typography>
                <p className={classes.p}>We are doing Bootcamp 2020.</p>
                <button className={classes.btn}>Contact</button>
            </Box>
            <Box component="div" className={classes.rightbox}>
                <img src={Brain} alt="brain" ref={ref} height="400px" className={classes.brain} />
                <img src={Base} alt="base" className={classes.base} />
            </Box>
        </div>
    )
}
