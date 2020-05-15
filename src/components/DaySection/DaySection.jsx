import React from 'react'
import './DaySection.scss'

const DaySection = ({ CountryCode, Day, Confirmed, Recovered, Deaths }) => {
    return (
        <section className='country-section'>
            <span>{CountryCode} Day: {Day}</span>
            <span>Confirmed: {Confirmed}</span>
            <span>Recovered: {Recovered}</span>
            <span>Deaths: {Deaths}</span>
        </section>
    )
}

export default DaySection