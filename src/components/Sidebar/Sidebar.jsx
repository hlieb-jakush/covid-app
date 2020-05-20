import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button/Button'
import world from '../../assets/flags/united-nations.svg'
import uk from '../../assets/flags/uk.svg'
import france from '../../assets/flags/france.svg'
import germany from '../../assets/flags/germany.svg'
import italy from '../../assets/flags/italy.svg'
import belarus from '../../assets/flags/belarus.svg'
import ukraine from '../../assets/flags/ukraine.svg'
import russia from '../../assets/flags/russia.svg'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <aside>
            <NavLink exact to='/' activeClassName="selected"><Button icon={world} country='World' /></NavLink>
            <NavLink to='/united-kingdom' activeClassName="selected"><Button icon={uk} country='United Kingdom' /></NavLink>
            <NavLink to='/france' activeClassName="selected"><Button icon={france} country='France' /></NavLink>
            <NavLink to='/germany' activeClassName="selected"><Button icon={germany} country='Germany' /></NavLink>
            <NavLink to='/italy' activeClassName="selected"><Button icon={italy} country='Italy' /></NavLink>
            <NavLink to='/belarus' activeClassName="selected"><Button icon={belarus} country='Belarus' /></NavLink>
            <NavLink to='/ukraine' activeClassName="selected"><Button icon={ukraine} country='Ukraine' /></NavLink>
            <NavLink to='/russia' activeClassName="selected"><Button icon={russia} country='Russia' /></NavLink>
        </aside>
    )
}

export default Sidebar