import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import CountryList from '../CountryList/CountryList'

import worldIcon from '../../assets/flags/united-nations.svg'
import './Main.scss'
import DayList from '../DayList/DayList'
import CountryFilter from '../CountryFilter/CountryFilter'


const Main = ({ world, countriesList, daysList, onSetCountry, setCountryFilterAlphabet, setCountryFilterConfirmed, setCountryFilterDeath, setCountryFilterRecovered, numberConverter }) => {
    return (
        <main>
            <Header
                icon={worldIcon}
                world={world}
                numberConverter={numberConverter}
            />
            <Route exact path='/' render={() => <CountryFilter
                setCountryFilterAlphabet={setCountryFilterAlphabet}
                setCountryFilterConfirmed={setCountryFilterConfirmed}
                setCountryFilterDeath={setCountryFilterDeath}
                setCountryFilterRecovered={setCountryFilterRecovered}
            />} />
            <Route path='/:country' render={() => <section>FILTER</section>} />
            <section>
                <Route exact path='/' render={() => <CountryList
                    countriesList={countriesList}
                    numberConverter={numberConverter}
                />} />
                <Route path='/:country' render={() => <DayList
                    daysList={daysList}
                    onSetCountry={onSetCountry}
                    numberConverter={numberConverter}
                />} />
            </section>
        </main>
    )
}

export default Main