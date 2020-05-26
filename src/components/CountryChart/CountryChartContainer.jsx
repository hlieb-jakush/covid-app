import React from 'react'
import { connect } from 'react-redux'
import { getCountryListOriginal } from '../../state/selectors'
import { numberConverter } from '../../tools/numberConverter'
import { dateConverter } from '../../tools/dateConverter'
import CountryChart from './CountryChart'

const CountryChartContainer = (props) => {
    return (
        <CountryChart {...props} numberConverter={numberConverter} dateConverter={dateConverter} />
    )
}

const mapStateToProps = (state) => ({
    countryList: getCountryListOriginal(state)
})

export default connect(mapStateToProps, null)(CountryChartContainer)