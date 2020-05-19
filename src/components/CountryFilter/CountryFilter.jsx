import React from 'react'
import './CountryFilter.scss'

const CountryFilter = ({ setCountryFilterAlphabet, setCountryFilterConfirmed, setCountryFilterRecovered, setCountryFilterDeath }) => {
    return (
        <section className='filter'>
            <span>Sorted by:</span>
            <span>
                <button onClick={setCountryFilterAlphabet}>Alphabet</button>
                <button onClick={setCountryFilterConfirmed}>Confirmed</button>
                <button onClick={setCountryFilterRecovered}>Recovered</button>
                <button onClick={setCountryFilterDeath}>Deaths</button>
            </span>
            <span>
                <input placeholder='Title...' />
                <button>Search</button>
            </span>
        </section>
    )
}

export default CountryFilter