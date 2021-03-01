import React, { useEffect } from 'react'
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css'

import person1 from '../../Images/persona-5.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    heading: {
        fontFamily: "Comfortaa, cursive",
        textAlign: 'center',
        textTransform: "uppercase",
        fontSize: '5rem',
    },
    ul: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none',
        fontSize: '2rem',
        color: '#5A20CB',
        fontFamily: "Comfortaa, cursive",
    },
    img: {
        height: '45vh',
        marginLeft: '38%'
    },
    footer: {
        fontFamily: "Comfortaa, cursive",
        fontSize: '20px',
        height: '100%',
        marginBottom: '-10px',
        textAlign: 'center',
    }
}))

export const About = () => {
    const classes = useStyles()
    const heading = useWebAnimations({ ...heartBeat })

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div>
            <Typography className={classes.heading} ref={heading.ref}>About Us</Typography>
            <div data-aos="fade">
                <img src={person1} alt="person1" className={classes.img} />
                <ul className={classes.ul}>
                    <li>BlockChain</li>
                    <li>Artifical Intelligence</li>
                    <li>Cloud Natice Computing</li>
                    <li>Internat Of Things</li>
                </ul>
                <footer className={classes.footer}>
                    <p> &#169; reserved By . Abdul Moiz</p>
                </footer>
            </div>

        </div>
    )
}
