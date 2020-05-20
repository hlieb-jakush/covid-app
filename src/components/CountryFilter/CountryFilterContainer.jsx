import React from 'react'
import CountryFilter from './CountryFilter'
import { connect } from 'react-redux'
import { setCountryFilterAlphabet, setCountryFilterConfirmed, setCountryFilterRecovered, setCountryFilterDeath } from '../../state/actionCreators'

const CountryFilterContainer = (props) => {
    return (
        <CountryFilter {...props} />
    )
}

export default connect(null, {
    setCountryFilterAlphabet,
    setCountryFilterConfirmed,
    setCountryFilterRecovered,
    setCountryFilterDeath
})(CountryFilterContainer)