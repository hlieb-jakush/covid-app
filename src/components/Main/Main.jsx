import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import CountryFilterContainer from '../CountryFilter/CountryFilterContainer'
import DayFilterContainer from '../DayFilter/DayFilterContainer'
import DayListContainer from '../DayList/DayListContainer'
import CountryListContainer from '../CountryList/CountryListContainer'
import worldIcon from '../../assets/flags/united-nations.svg'
import './Main.scss'


const Main = ({ world, numberConverter }) => {
    return (
        <main>
            <Header
                icon={worldIcon}
                world={world}
                numberConverter={numberConverter}
            />
            <Route exact path='/' render={() => <CountryFilterContainer />} />
            <Route path='/:country' render={() => <DayFilterContainer />} />
            <section>
                <Route exact path='/' render={() => <CountryListContainer />} />
                <Route path='/:country' render={() => <DayListContainer />} />
            </section>
        </main>
    )
}

export default Main