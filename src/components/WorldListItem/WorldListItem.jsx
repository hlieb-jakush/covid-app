import React from 'react'

const WorldListItem = ({ Country, TotalConfirmed, NewConfirmed, TotalDeaths, NewDeaths, TotalRecovered, NewRecovered, numberConverter }) => {
    return (
        <section className='covid-app__list-item'>
            <span>{Country}</span>
            <span>Confirmed: {numberConverter(TotalConfirmed)} (+{numberConverter(NewConfirmed)})</span>
            <span>Recovered: {numberConverter(TotalRecovered)} (+{numberConverter(NewRecovered)})</span>
            <span>Deaths: {numberConverter(TotalDeaths)} (+{numberConverter(NewDeaths)})</span>
        </section>
    )
}

export default WorldListItem