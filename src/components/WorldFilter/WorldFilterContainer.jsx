import React from 'react'
import WorldFilter from './WorldFilter'
import { connect } from 'react-redux'
import {
    setWorldFilterDefault, setWorldFilterConfirmed,
    setWorldFilterRecovered, setWorldFilterDeath
} from '../../state/actionCreators'
import { getWorldFilterType } from '../../state/selectors'

const CountryFilterContainer = ({ filterType, setWorldFilterDefault, setWorldFilterConfirmed, setWorldFilterRecovered, setWorldFilterDeath }) => {


    return (
        <WorldFilter
            activeButton={filterType}
            setDefaultFilter={setWorldFilterDefault}
            setConfirmedFilter={setWorldFilterConfirmed}
            setRecoveredFilter={setWorldFilterRecovered}
            setDeathFilter={setWorldFilterDeath}
        />
    )
}

const mapStateToProps = (state) => ({
    filterType: getWorldFilterType(state)
})

export default connect(mapStateToProps, {
    setWorldFilterDefault,
    setWorldFilterConfirmed,
    setWorldFilterRecovered,
    setWorldFilterDeath
})(CountryFilterContainer)