import React from 'react'
import ListItemValue from '../ListItemValue/ListItemValue'
import './Header.scss'

const Header = ({ icon, world, setSidebarOpen, numberConverter }) => {
    return (
        <header className='covid-app__section covid-app__header'>
            <button className='covid-app__button covid-app__button_selected' onClick={setSidebarOpen}>
                Menu
            </button>
            <ListItemValue img={icon} alt='flag' />
            <ListItemValue text={'Confirmed:'} totalData={world.TotalConfirmed} newData={world.NewConfirmed} numberConverter={numberConverter} isColumn />
            <ListItemValue text={'Recovered:'} totalData={world.TotalRecovered} newData={world.NewRecovered} numberConverter={numberConverter} isColumn />
            <ListItemValue text={'Deaths:'} totalData={world.TotalDeaths} newData={world.NewDeaths} numberConverter={numberConverter} isColumn />
        </header>
    )
}

export default Header