import React from 'react'
import './DaySection.scss'

const DaySection = ({ Day, Confirmed, Recovered, Deaths, numberConverter, dateConverter }) => {
    return (
        <section className='country-section'>
            <span>{dateConverter(Day)}</span>
            <span>Confirmed: {numberConverter(Confirmed)}</span>
            <span>Recovered: {numberConverter(Recovered)}</span>
            <span>Deaths: {numberConverter(Deaths)}</span>
        </section>
    )
}

export default DaySection