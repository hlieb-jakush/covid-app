import React from 'react'
import { connect } from 'react-redux'
import CountryList from './CountryList'
import { getDaysFiltered } from '../../state/selectors'
import { onSetCountry } from '../../state/thunks'
import { numberConverter } from '../../tools/numberConverter'
import { dateConverter } from '../../tools/dateConverter'

const CountryListContainer = (props) => {
    return (
        <CountryList {...props} numberConverter={numberConverter} dateConverter={dateConverter} />
    )
}

const mapStateToProps = (state) => ({
    daysList: getDaysFiltered(state)
})

export default connect(mapStateToProps, { onSetCountry })(CountryListContainer)