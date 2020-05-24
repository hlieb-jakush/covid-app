import React from 'react'

const CountryListItem = ({ Day, Confirmed, Recovered, Deaths, numberConverter, dateConverter }) => {
    return (
        <section className='covid-app__list-item'>
            <span>{dateConverter(Day)}</span>
            <span>Confirmed: {numberConverter(Confirmed)}</span>
            <span>Recovered: {numberConverter(Recovered)}</span>
            <span>Deaths: {numberConverter(Deaths)}</span>
        </section>
    )
}

export default CountryListItem