import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import { Box, Typography } from '@material-ui/core';
import code from '../../Images/code.svg';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        // backgroundColor: 'black'

    },
    heading: {
        fontSize: '5rem',
        color: 'black'
    },
    leftbox: {
        margin: '6rem',
        color: 'black',
    },
    p: {
        fontSize: '2rem'
    },
    btn: {
        fontSize: '2rem',
        borderRadius: '50px',
        width: '15vw',
        height: '50px',
        marginLeft: '20px',
        backgroundColor: '#5A20CB',
        borderColor: '#5A20CB',
        borderBottom: '#5A20CB',
        borderRight: '#5A20CB',
        color: 'white',
        cursor: 'pointer'
    },
    rightbox: {
        marginTop: '5rem',
        // marginRight: '20rem'
        // backgroundColor: 'black'
    },
}));

export const Contant1 = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Grid container spacing={3}> */}
            <Box component="div" className={classes.leftbox}>
                <Typography Variant="h3" noWrap className={classes.heading}>Web Animation</Typography>
                <p className={classes.p}>We are doing Bootcamp 2020.</p>
                <button className={classes.btn}>Contact</button>
            </Box>
            <Box component="div" className={classes.rightbox}>
                <img src={code} alt="Brain" />
            </Box>
            {/* </Grid> */}
        </div>
    )
}
