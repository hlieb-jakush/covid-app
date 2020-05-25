import React from 'react'
import CountryFilter from './CountryFilter'
import { connect } from 'react-redux'
import { setCountryFilterDefault, setCountryFilterReverse } from '../../state/actionCreators'
import { getCountryFilterType, getCountryDisplayType } from '../../state/selectors'

const CountryFilterContainer = ({ displayType, filterType, setCountryFilterDefault, setCountryFilterReverse }) => {
    return (
        <CountryFilter
            displayType={displayType}
            filterType={filterType}
            setDefaultFilter={setCountryFilterDefault}
            setReverseFilter={setCountryFilterReverse}
        />
    )
}

const mapStateToProps = (state) => ({
    displayType: getCountryDisplayType(state),
    filterType: getCountryFilterType(state)
})

export default connect(mapStateToProps, {
    setCountryFilterDefault,
    setCountryFilterReverse
})(CountryFilterContainer)