import React, { useEffect } from 'react'
import DaySection from '../DaySection/DaySection'
import { withRouter } from 'react-router-dom'

const DayList = ({ country, onSetCountry, match }) => {

    useEffect(() => {
        onSetCountry(match.params.country)
    }, [match.params.country])

    return (
        country ? (country.map((item, index) => (
            <DaySection
                key={index}
                CountryCode={item.CountryCode}
                Day={index + 1}
                Confirmed={item.Confirmed}
                Recovered={item.Recovered}
                Deaths={item.Deaths}
            />)
        )) : 'Loading...'
    )
}

export default withRouter(DayList) 