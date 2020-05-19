import React from 'react'
import './CountrySection.scss'

const CountrySection = ({ Country, TotalConfirmed, NewConfirmed, TotalDeaths, NewDeaths, TotalRecovered, NewRecovered, numberConverter }) => {
    return (
        <section className='country-section'>
            <span>{Country}</span>
            <span>Confirmed: {numberConverter(TotalConfirmed)} (+{numberConverter(NewConfirmed)})</span>
            <span>Recovered: {numberConverter(TotalRecovered)} (+{numberConverter(NewRecovered)})</span>
            <span>Deaths: {numberConverter(TotalDeaths)} (+{numberConverter(NewDeaths)})</span>
        </section>
    )
}

export default CountrySection