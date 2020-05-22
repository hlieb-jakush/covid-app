import React, { useState } from 'react'
import CountryFilter from './CountryFilter'
import { connect } from 'react-redux'
import { setCountryFilterAlphabet, setCountryFilterConfirmed, setCountryFilterRecovered, setCountryFilterDeath } from '../../state/actionCreators'

const CountryFilterContainer = ({ setCountryFilterAlphabet, setCountryFilterConfirmed, setCountryFilterRecovered, setCountryFilterDeath }) => {
    const [activeButton, setActiveButton] = useState('default')

    const setFilter = (func, name) => {
        setActiveButton(name)
        func()
    }

    const setDefaultFilter = () => {
        setFilter(setCountryFilterAlphabet, 'default')
    }

    const setConfirmedFilter = () => {
        setFilter(setCountryFilterConfirmed, 'confirmed')
    }

    const setRecoveredFilter = () => {
        setFilter(setCountryFilterRecovered, 'recovered')
    }

    const setDeathFilter = () => {
        setFilter(setCountryFilterDeath, 'death')
    }

    return (
        <CountryFilter
            activeButton={activeButton}
            setDefaultFilter={setDefaultFilter}
            setConfirmedFilter={setConfirmedFilter}
            setRecoveredFilter={setRecoveredFilter}
            setDeathFilter={setDeathFilter}
        />
    )
}

export default connect(null, {
    setCountryFilterAlphabet,
    setCountryFilterConfirmed,
    setCountryFilterRecovered,
    setCountryFilterDeath
})(CountryFilterContainer)