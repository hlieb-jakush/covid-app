import React from 'react'
import { NavLink } from 'react-router-dom'
import SidebarButton from '../SidebarButton/SidebarButton'
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
        <aside className='covid-app__section covid-app__sidebar'>
            <NavLink exact to='/' activeClassName="selected"><SidebarButton icon={world} country='World' /></NavLink>
            <NavLink to='/united-kingdom' activeClassName="selected"><SidebarButton icon={uk} country='United Kingdom' /></NavLink>
            <NavLink to='/france' activeClassName="selected"><SidebarButton icon={france} country='France' /></NavLink>
            <NavLink to='/germany' activeClassName="selected"><SidebarButton icon={germany} country='Germany' /></NavLink>
            <NavLink to='/italy' activeClassName="selected"><SidebarButton icon={italy} country='Italy' /></NavLink>
            <NavLink to='/belarus' activeClassName="selected"><SidebarButton icon={belarus} country='Belarus' /></NavLink>
            <NavLink to='/ukraine' activeClassName="selected"><SidebarButton icon={ukraine} country='Ukraine' /></NavLink>
            <NavLink to='/russia' activeClassName="selected"><SidebarButton icon={russia} country='Russia' /></NavLink>
        </aside>
    )
}

export default Sidebar