import React, { useState } from 'react'
import CountryFilter from './CountryFilter'
import { connect } from 'react-redux'
import { setCountryFilterDefault, setCountryFilterReverse } from '../../state/actionCreators'

const CountryFilterContainer = ({ setCountryFilterDefault, setCountryFilterReverse }) => {
    const [activeButton, setActiveButton] = useState('default')

    const setFilter = (func, name) => {
        setActiveButton(name)
        func()
    }

    const setDefaultFilter = () => {
        setFilter(setCountryFilterDefault, 'default')
    }

    const setReverseFilter = () => {
        setFilter(setCountryFilterReverse, 'reverse')
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
    setCountryFilterDefault,
    setCountryFilterReverse
})(CountryFilterContainer)