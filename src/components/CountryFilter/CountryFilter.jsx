import React from 'react'
import './CountryFilter.scss'

const CountryFilter = ({ setCountryFilterAlphabet, setCountryFilterConfirmed, setCountryFilterRecovered, setCountryFilterDeath }) => {
    return (
        <section className='filter'>
            <span>
                <span>Sorted by:</span>
                <button onClick={setCountryFilterAlphabet}>Default</button>
                <button onClick={setCountryFilterConfirmed}>Confirmed</button>
                <button onClick={setCountryFilterRecovered}>Recovered</button>
                <button onClick={setCountryFilterDeath}>Deaths</button>
            </span>
            <span>
                <input placeholder='Country title...' />
                <button>Search</button>
            </span>
        </section>
    )
}

export default CountryFilter