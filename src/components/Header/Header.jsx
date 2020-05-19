import React from 'react'
import './Header.scss'

const Header = ({ icon, world, numberConverter }) => {
    return (
        <header>
            <img src={icon} alt='flag' />
            <span>Confirmed: {numberConverter(world.TotalConfirmed)} (+{numberConverter(world.NewConfirmed)})</span>
            <span>Recovered: {numberConverter(world.TotalRecovered)} (+{numberConverter(world.NewRecovered)})</span>
            <span>Deaths: {numberConverter(world.TotalDeaths)} (+{numberConverter(world.NewDeaths)})</span>
        </header>
    )
}

export default Header