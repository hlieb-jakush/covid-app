import React from 'react'
import ListItemValue from '../ListItemValue/ListItemValue'

const WorldListItem = ({ Country, TotalConfirmed, NewConfirmed, TotalDeaths, NewDeaths, TotalRecovered, NewRecovered, numberConverter }) => {
    return (
        <section className='covid-app__list-item'>
            <ListItemValue text={Country} />
            <ListItemValue text={'Confirmed:'} totalData={TotalConfirmed} newData={NewConfirmed} numberConverter={numberConverter} isColumn />
            <ListItemValue text={'Recovered:'} totalData={TotalRecovered} newData={NewRecovered} numberConverter={numberConverter} isColumn />
            <ListItemValue text={'Deaths:'} totalData={TotalDeaths} newData={NewDeaths} numberConverter={numberConverter} isColumn />
        </section>
    )
}

export default WorldListItem