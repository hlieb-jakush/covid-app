import React from 'react'
import { connect } from 'react-redux'
import CountryList from './CountryList'
import { getCountryListFiltered } from '../../state/selectors'
import { numberConverter } from '../../tools/numberConverter'
import { dateConverter } from '../../tools/dateConverter'

const CountryListContainer = (props) => {
    return (
        <CountryList {...props} numberConverter={numberConverter} dateConverter={dateConverter} />
    )
}

const mapStateToProps = (state) => ({
    countryList: getCountryListFiltered(state)
})

export default connect(mapStateToProps, null)(CountryListContainer)