import React from 'react'
import DayFilter from './DayFilter'
import { connect } from 'react-redux'
import { setDaysFilterDefault, setDaysFilterReverse } from '../../state/actionCreators'

const DayFilterContainer = (props) => {
    return (
        <DayFilter {...props} />
    )
}

export default connect(null, {
    setDaysFilterDefault,
    setDaysFilterReverse
})(DayFilterContainer)