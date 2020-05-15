import React from 'react'
import Button from '../../components/Button/Button'
import world from '../../assets/flags/united-nations.svg'
import belarus from '../../assets/flags/belarus.svg'
import ukraine from '../../assets/flags/ukraine.svg'
import russia from '../../assets/flags/russia.svg'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <aside>
            <Button icon={world} country='World' />
            <Button icon={belarus} country='Belarus' />
            <Button icon={ukraine} country='Ukraine' />
            <Button icon={russia} country='Russia' />
        </aside>
    )
}

export default Sidebar