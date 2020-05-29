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

const Sidebar = ({ isSidebarOpen, setSidebarClose }) => {
    return (
        <aside className={`covid-app__section covid-app__sidebar ${isSidebarOpen ? 'covid-app__sidebar_mobile' : ''}`}>
            <button className='covid-app__button covid-app__button_selected covid-app__button_close-btn' onClick={setSidebarClose}>Back</button>
            <NavLink exact to='/' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={world} country='World' /></NavLink>
            <NavLink to='/united-kingdom' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={uk} country='United Kingdom' /></NavLink>
            <NavLink to='/france' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={france} country='France' /></NavLink>
            <NavLink to='/germany' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={germany} country='Germany' /></NavLink>
            <NavLink to='/italy' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={italy} country='Italy' /></NavLink>
            <NavLink to='/belarus' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={belarus} country='Belarus' /></NavLink>
            <NavLink to='/ukraine' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={ukraine} country='Ukraine' /></NavLink>
            <NavLink to='/russia' activeClassName="selected" onClick={setSidebarClose}><SidebarButton icon={russia} country='Russia' /></NavLink>
        </aside>
    )
}

export default Sidebar