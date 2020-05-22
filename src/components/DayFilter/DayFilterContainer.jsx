import React, { useState } from 'react'
import DayFilter from './DayFilter'
import { connect } from 'react-redux'
import { setDaysFilterDefault, setDaysFilterReverse } from '../../state/actionCreators'

const DayFilterContainer = ({ setDaysFilterDefault, setDaysFilterReverse }) => {
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
        <DayFilter
            activeButton={activeButton}
            setDefaultFilter={setDefaultFilter}
            setReverseFilter={setReverseFilter}
        />
    )
}

export default connect(null, {
    setDaysFilterDefault,
    setDaysFilterReverse
})(DayFilterContainer)