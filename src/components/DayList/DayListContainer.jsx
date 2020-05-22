import React from 'react'
import { connect } from 'react-redux'
import DayList from './DayList'
import { getDaysFiltered } from '../../state/selectors'
import { onSetCountry } from '../../state/thunks'
import { numberConverter } from '../../tools/numberConverter'
import { dateConverter } from '../../tools/dateConverter'

const DayListContainer = (props) => {
    return (
        <DayList {...props} numberConverter={numberConverter} dateConverter={dateConverter} />
    )
}

const mapStateToProps = (state) => ({
    daysList: getDaysFiltered(state)
})

export default connect(mapStateToProps, { onSetCountry })(DayListContainer)