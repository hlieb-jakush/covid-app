import React, { useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CountryFilterContainer from '../CountryFilter/CountryFilterContainer'
import CountryListContainer from '../CountryList/CountryListContainer'
import { onSetCountry } from '../../state/thunks'

const CountryPage = ({ match, onSetCountry }) => {

    useEffect(() => {
        onSetCountry(match.params.country)
    }, [match.params.country])

    return (
        <>
            <CountryFilterContainer />
            <Route exact path='/:country/' render={() => <CountryListContainer />} />
        </>
    )
}

export default withRouter(connect(null, { onSetCountry })(CountryPage))