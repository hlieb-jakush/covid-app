import React from 'react'
import './Header.scss'

const Header = ({ icon, global }) => {
    return (
        <header>
            <img src={icon} alt='flag' />
            <span>Confirmed: {global.TotalConfirmed} (+{global.NewConfirmed})</span>
            <span>Recovered: {global.TotalRecovered} (+{global.NewRecovered})</span>
            <span>Deaths: {global.TotalDeaths} (+{global.NewDeaths})</span>
        </header>
    )
}

export default Header