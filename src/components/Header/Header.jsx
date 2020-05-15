import React from 'react'
import './Header.scss'

const Header = ({ icon, global }) => {
    return (
        <header>
            <span><img src={icon} alt='flag' /></span>
            <span>Confirmed: {global.TotalConfirmed} (+{global.NewConfirmed})</span>
            <span>Recovered: {global.TotalRecovered} (+{global.NewRecovered})</span>
            <span>Deaths: {global.TotalDeaths} (+{global.NewDeaths})</span>
        </header>
    )
}

export default Header