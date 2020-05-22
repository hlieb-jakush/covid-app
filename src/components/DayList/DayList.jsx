import React, { useEffect } from 'react'
import DaySection from '../DaySection/DaySection'
import { withRouter } from 'react-router-dom'

const DayList = ({ daysList, onSetCountry, match, numberConverter, dateConverter }) => {

    useEffect(() => {
        onSetCountry(match.params.country)
    }, [match.params.country])

    return (
        daysList ? (daysList.map((item, index) => (
            <DaySection
                key={index}
                CountryCode={item.CountryCode}
                Day={item.Date}
                Confirmed={item.Confirmed}
                Recovered={item.Recovered}
                Deaths={item.Deaths}
                numberConverter={numberConverter}
                dateConverter={dateConverter}
            />)
        )) : 'Loading...'
    )
}

export default withRouter(DayList) 