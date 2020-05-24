import React from 'react'
import CountryFilterContainer from '../CountryFilter/CountryFilterContainer'
import CountryListContainer from '../CountryList/CountryListContainer'

const CountryPage = () => {
    return (
        <>
            <CountryFilterContainer />
            <CountryListContainer />
        </>
    )
}

export default CountryPage