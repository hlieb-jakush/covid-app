import React, { useEffect } from 'react'
import DaySection from '../DaySection/DaySection'
import { withRouter } from 'react-router-dom'

const DayList = ({ daysList, onSetCountry, match, numberConverter, dateConverter }) => {

    useEffect(() => {
        onSetCountry(match.params.country)
    }, [match.params.country])

    return (
        daysList ? (daysList.map(item => (
            <DaySection
                key={item.Date}
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