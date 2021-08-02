import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import './AboutPage.scss'


const AboutPage = () => {
    return (
        <div className='progress'>
            <h1>This page is in progress</h1>
            <NavHashLink to='/#top'>back to homepage</NavHashLink>
        </div>
    )
}

export default AboutPage
