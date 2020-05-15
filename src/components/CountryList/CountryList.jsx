import React from 'react'
import CountrySection from '../CountrySection/CountrySection'
import { NavLink } from 'react-router-dom'

const CountryList = ({ summary }) => {
    return (
        summary.Countries.map(item => (
            <NavLink to={`/${item.Country}`}>
                <CountrySection
                    key={item.Country}
                    Country={item.Country}
                    TotalConfirmed={item.TotalConfirmed}
                    NewConfirmed={item.NewConfirmed}
                    TotalDeaths={item.TotalDeaths}
                    NewDeaths={item.NewDeaths}
                    TotalRecovered={item.TotalRecovered}
                    NewRecovered={item.NewRecovered}
                />
            </NavLink>)
        )
    )
}

export default CountryList