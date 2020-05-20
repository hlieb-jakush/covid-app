import React from 'react'
import { connect } from 'react-redux'
import CountryList from './CountryList'
import { getCountriesFiltered } from '../../state/selectors'
import { numberConverter } from '../../tools/numberConverter'

const CountryListContainer = (props) => {
    return (
        <CountryList {...props} numberConverter={numberConverter} />
    )
}

const mapStateToProps = (state) => ({
    countriesList: getCountriesFiltered(state)
})

export default connect(mapStateToProps, null)(CountryListContainer)