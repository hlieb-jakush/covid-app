import React, { useEffect } from 'react'
import CountryListItem from '../CountryListItem/CountryListItem'
import { withRouter } from 'react-router-dom'

const CountryList = ({ daysList, onSetCountry, match, numberConverter, dateConverter }) => {

    useEffect(() => {
        onSetCountry(match.params.country)
    }, [match.params.country])

    return (
        <section className='covid-app__section covid-app__section_list'>
            {
                daysList ? (daysList.map(item => (
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

export default withRouter(CountryList) 