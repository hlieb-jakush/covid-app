import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import CountryPage from '../CountryPage/CountryPage'
import WorldPage from '../WorldPage/WorldPage'
import worldIcon from '../../assets/flags/united-nations.svg'
import './Main.scss'


const Main = ({ world, numberConverter, setSidebarOpen }) => {
    return (
        <main className='covid-app__main'>
            <Header
                icon={worldIcon}
                world={world}
                setSidebarOpen={setSidebarOpen}
                numberConverter={numberConverter}
            />
            <Route exact path='/' render={() => <WorldPage />} />
            <Route path='/:country' render={() => <CountryPage />} />
        </main>
    )
}

export default Main