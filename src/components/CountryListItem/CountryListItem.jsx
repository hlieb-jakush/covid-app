import React from 'react'
import ListItemValue from '../ListItemValue/ListItemValue'

const CountryListItem = ({ Day, Confirmed, Recovered, Deaths, numberConverter, dateConverter }) => {
    return (
        <section className='covid-app__list-item'>
            <ListItemValue totalData={Day} dateConverter={dateConverter} />
            <ListItemValue text={'Confirmed:'} totalData={Confirmed} numberConverter={numberConverter} />
            <ListItemValue text={'Recovered:'} totalData={Recovered} numberConverter={numberConverter} />
            <ListItemValue text={'Deaths:'} totalData={Deaths} numberConverter={numberConverter} />
        </section>
    )
}

export default CountryListItem