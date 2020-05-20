import React from 'react'
import { connect } from 'react-redux'
import DayList from './DayList'
import { getDaysFiltered } from '../../state/selectors'
import { onSetCountry } from '../../state/thunks'
import { numberConverter } from '../../tools/numberConverter'

const DayListContainer = (props) => {
    return (
        <DayList {...props} numberConverter={numberConverter} />
    )
}

const mapStateToProps = (state) => ({
    countriesList: getDaysFiltered(state)
})

export default connect(mapStateToProps, { onSetCountry })(DayListContainer)