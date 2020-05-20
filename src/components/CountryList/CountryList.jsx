import React from 'react'
import CountrySection from '../CountrySection/CountrySection'
import { NavLink } from 'react-router-dom'

const CountryList = ({ countriesList, numberConverter }) => {
    return (
        countriesList.map(item => (
            <NavLink to={`/${item.Slug}`}>
                <CountrySection
                    key={item.Country}
                    Country={item.Country}
                    TotalConfirmed={item.TotalConfirmed}
                    NewConfirmed={item.NewConfirmed}
                    TotalDeaths={item.TotalDeaths}
                    NewDeaths={item.NewDeaths}
                    TotalRecovered={item.TotalRecovered}
                    NewRecovered={item.NewRecovered}
                    numberConverter={numberConverter}
                />
            </NavLink>)
        )
    )
}

export default CountryList