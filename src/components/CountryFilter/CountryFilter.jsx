import React from 'react'
import './CountryFilter.scss'

const CountryFilter = () => {
    return (
        <section className='filter'>
            <span>Sorted by:</span>
            <span>
                <button>Alphabet</button>
                <button>Confirmed</button>
                <button>Recovered</button>
                <button>Deaths</button>
            </span>
            <span>
                <input placeholder='Title...' />
                <button>Search</button>
            </span>
        </section>
    )
}

export default CountryFilter