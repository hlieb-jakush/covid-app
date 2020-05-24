import React, { useState } from 'react'
import CountryFilter from './CountryFilter'
import { connect } from 'react-redux'
import { setDaysFilterDefault, setDaysFilterReverse } from '../../state/actionCreators'

const CountryFilterContainer = ({ setDaysFilterDefault, setDaysFilterReverse }) => {
    const [activeButton, setActiveButton] = useState('default')

    const setFilter = (func, name) => {
        setActiveButton(name)
        func()
    }

    const setDefaultFilter = () => {
        setFilter(setDaysFilterDefault, 'default')
    }

    const setReverseFilter = () => {
        setFilter(setDaysFilterReverse, 'reverse')
    }

    return (
        <CountryFilter
            activeButton={activeButton}
            setDefaultFilter={setDefaultFilter}
            setReverseFilter={setReverseFilter}
        />
    )
}

export default connect(null, {
    setDaysFilterDefault,
    setDaysFilterReverse
})(CountryFilterContainer)