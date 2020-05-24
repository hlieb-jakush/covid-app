import React from 'react'
import './SidebarButton.scss'

const SidebarButton = ({ icon, country }) => {
    return (
        <div className='sidebar__button'>
            <span><img src={icon} alt='flag' /></span>
            <span>{country}</span>
        </div>
    )
}

export default SidebarButton