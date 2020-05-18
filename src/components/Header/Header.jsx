import React from 'react'
import './Header.scss'

const Header = ({ icon, world }) => {
    return (
        <header>
            <img src={icon} alt='flag' />
            <span>Confirmed: {world.TotalConfirmed} (+{world.NewConfirmed})</span>
            <span>Recovered: {world.TotalRecovered} (+{world.NewRecovered})</span>
            <span>Deaths: {world.TotalDeaths} (+{world.NewDeaths})</span>
        </header>
    )
}

export default Header