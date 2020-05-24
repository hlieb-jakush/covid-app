import React, { useState } from 'react'
import WorldFilter from './WorldFilter'
import { connect } from 'react-redux'
import {
    setWorldFilterDefault, setWorldFilterConfirmed,
    setWorldFilterRecovered, setWorldFilterDeath
} from '../../state/actionCreators'

const CountryFilterContainer = ({ setWorldFilterDefault, setWorldFilterConfirmed, setWorldFilterRecovered, setWorldFilterDeath }) => {
    const [activeButton, setActiveButton] = useState('default')

    const setFilter = (func, name) => {
        setActiveButton(name)
        func()
    }

    const setDefaultFilter = () => {
        setFilter(setWorldFilterDefault, 'default')
    }

    const setConfirmedFilter = () => {
        setFilter(setWorldFilterConfirmed, 'confirmed')
    }

    const setRecoveredFilter = () => {
        setFilter(setWorldFilterRecovered, 'recovered')
    }

    const setDeathFilter = () => {
        setFilter(setWorldFilterDeath, 'death')
    }

    return (
        <WorldFilter
            activeButton={activeButton}
            setDefaultFilter={setDefaultFilter}
            setConfirmedFilter={setConfirmedFilter}
            setRecoveredFilter={setRecoveredFilter}
            setDeathFilter={setDeathFilter}
        />
    )
}

export default connect(null, {
    setWorldFilterDefault,
    setWorldFilterConfirmed,
    setWorldFilterRecovered,
    setWorldFilterDeath
})(CountryFilterContainer)