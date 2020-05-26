import React from 'react'
import CountryListItem from '../CountryListItem/CountryListItem'

const CountryList = ({ countryList, numberConverter, dateConverter }) => {

    return (
        <section className='covid-app__section covid-app__section_list'>
            {
                countryList ? (countryList.map(item => (
                    <CountryListItem
                        key={item.Date}
                        Day={item.Date}
                        Confirmed={item.Confirmed}
                        Recovered={item.Recovered}
                        Deaths={item.Deaths}
                        numberConverter={numberConverter}
                        dateConverter={dateConverter}
                    />)
                )) : 'Loading...'
            }
        </section>

    )
}

export default CountryList 