import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import CountryList from '../CountryList/CountryList'

import world from '../../assets/flags/united-nations.svg'
import './Main.scss'
import DayList from '../DayList/DayList'


const Main = ({ summary, country, onSetCountry }) => {
    return (
        <main>
            <Header icon={world} global={summary.Global} />
            <Route path='/:country' render={() => <section>FILTER</section>} />
            <section>
                <Route exact path='/' render={() => <CountryList summary={summary} />} />
                <Route path='/:country' render={() => <DayList country={country} onSetCountry={onSetCountry} />} />
            </section>
        </main>
    )
}

export default Main