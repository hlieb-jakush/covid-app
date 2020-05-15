import React from 'react'
import './CountrySection.scss'

const CountrySection = ({ Country, TotalConfirmed, NewConfirmed, TotalDeaths, NewDeaths, TotalRecovered, NewRecovered }) => {
    return (
        <section className='country-section'>
            <span>{Country}</span>
            <span>Confirmed: {TotalConfirmed} (+{NewConfirmed})</span>
            <span>Recovered: {TotalRecovered} (+{NewRecovered})</span>
            <span>Deaths: {TotalDeaths} (+{NewDeaths})</span>
        </section>
    )
}

export default CountrySection