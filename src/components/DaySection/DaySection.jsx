import React from 'react'
import './DaySection.scss'

const DaySection = ({ CountryCode, Day, Confirmed, Recovered, Deaths, numberConverter }) => {
    return (
        <section className='country-section'>
            <span>{CountryCode} Day: {Day}</span>
            <span>Confirmed: {numberConverter(Confirmed)}</span>
            <span>Recovered: {numberConverter(Recovered)}</span>
            <span>Deaths: {numberConverter(Deaths)}</span>
        </section>
    )
}

export default DaySection