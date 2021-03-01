import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import useWebAnimations, { shakeY } from "@wellyshen/use-web-animations";


import service6 from '../../Images/services-6.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: 'black'
    },
    service6: {
        height: '25rem',
        margin: '5rem'
    },
    TextPart: {
        fontFamily: 'Comfortaa, cursive',
        fontSize: '3rem',
        margin: '4rem',
        marginTop: '10rem',
        color: 'white',
        textAlign: 'center',
    },
    para: {
        color: 'white',
        fontSize: '1.6rem',
        margin: '0rem',
        fontFamily: 'Comfortaa, cursive',
        textAlign: 'center',
        marginRight: '5rem'
    },
}));



export const Contant2 = () => {

    const classes = useStyles();

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'translateY(0px)' },
            { transform: 'translateY(40px)' },

        ],
        timing: {
            duration: 4000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',

        }

    })
    const refs = useWebAnimations({ ...shakeY })
    return (
        <div className={classes.root}>
            <Box>
                <img src={service6} alt="servies6" className={classes.service6} ref={ref} />
            </Box>
            <Box ref={refs.ref}>
                <Typography variant="h3" noWrap className={classes.TextPart}>
                    UX Animation
             </Typography>
                <p className={classes.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae maiores facere temporibus, sed eum culpa aliquid voluptatem, non quis, odit sunt nam iste repellat inventore! Fugiat libero voluptas alias ratione.</p>
            </Box>
        </div>
    )
}
