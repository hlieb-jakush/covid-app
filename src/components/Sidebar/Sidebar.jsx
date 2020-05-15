import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button'
import world from '../../assets/flags/united-nations.svg'
import belarus from '../../assets/flags/belarus.svg'
import ukraine from '../../assets/flags/ukraine.svg'
import russia from '../../assets/flags/russia.svg'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <aside>
            <NavLink exact to='/' activeClassName="selected"><Button icon={world} country='World' /></NavLink>
            <NavLink to='/belarus' activeClassName="selected"><Button icon={belarus} country='Belarus' /></NavLink>
            <NavLink to='/ukraine' activeClassName="selected"><Button icon={ukraine} country='Ukraine' /></NavLink>
            <NavLink to='/russia' activeClassName="selected"><Button icon={russia} country='Russia' /></NavLink>
        </aside>
    )
}

export default Sidebar