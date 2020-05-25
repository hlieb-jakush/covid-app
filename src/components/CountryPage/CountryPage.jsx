import React from 'react'
import { Route } from 'react-router-dom'
import CountryFilterContainer from '../CountryFilter/CountryFilterContainer'
import CountryListContainer from '../CountryList/CountryListContainer'

const CountryPage = () => {
    return (
        <>
            <CountryFilterContainer />
            <Route exact path='/:country/' render={() => <CountryListContainer />} />
        </>
    )
}

export default CountryPage