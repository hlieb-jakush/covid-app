import React from 'react'
import './DayFilter.scss'

const DayFilter = ({ setCountryFilterAlphabet, setCountryFilterConfirmed }) => {
    return (
        <section className='filter'>
            <span>
                <span>Sorted by:</span>
                <button onClick={setCountryFilterAlphabet}>Default</button>
                <button onClick={setCountryFilterConfirmed}>Reverse</button>
            </span>
            <span>
                <input placeholder='Day number...' />
                <button>Search</button>
            </span>
        </section>
    )
}

export default DayFilter