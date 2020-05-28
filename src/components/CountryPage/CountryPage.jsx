import React, { useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CountryFilterContainer from '../CountryFilter/CountryFilterContainer'
import CountryListContainer from '../CountryList/CountryListContainer'
import CountryChartContainer from '../CountryChart/CountryChartContainer'
import { onSetCountry } from '../../state/thunks'

const CountryPage = ({ match, onSetCountry }) => {

    useEffect(() => {
        onSetCountry(match.params.country)
    }, [match.params.country, onSetCountry])

    return (
        <>
            <CountryFilterContainer />
            <Route exact path='/:country/' render={() => <CountryListContainer />} />
            <Route path='/:country/chart' render={() => <CountryChartContainer />} />
        </>
    )
}

export default withRouter(connect(null, { onSetCountry })(CountryPage))