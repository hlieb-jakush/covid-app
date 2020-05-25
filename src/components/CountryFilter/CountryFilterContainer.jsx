import React from 'react'
import CountryFilter from './CountryFilter'
import { connect } from 'react-redux'
import { setCountryFilterDefault, setCountryFilterReverse, setDisplayTypeList, setDisplayTypeChart } from '../../state/actionCreators'
import { getCountryFilterType, getCountryDisplayType } from '../../state/selectors'

const CountryFilterContainer = ({ displayType, filterType, setCountryFilterDefault, setCountryFilterReverse, setDisplayTypeList, setDisplayTypeChart }) => {
    return (
        <CountryFilter
            displayType={displayType}
            filterType={filterType}
            setDefaultFilter={setCountryFilterDefault}
            setReverseFilter={setCountryFilterReverse}
            setListType={setDisplayTypeList}
            setChartType={setDisplayTypeChart}
        />
    )
}

const mapStateToProps = (state) => ({
    displayType: getCountryDisplayType(state),
    filterType: getCountryFilterType(state)
})

export default connect(mapStateToProps, {
    setCountryFilterDefault,
    setCountryFilterReverse,
    setDisplayTypeList,
    setDisplayTypeChart
})(CountryFilterContainer)