import React from 'react'

const CountryFilter = ({ activeButton, setDefaultFilter, setReverseFilter }) => {
    return (
        <section className='covid-app__section covid-app__filter'>
            <span>
                <span>Sorted by:</span>
                <button className={activeButton === 'default' ? 'selected' : null} onClick={setDefaultFilter}>Default</button>
                <button className={activeButton === 'reverse' ? 'selected' : null} onClick={setReverseFilter}>Reverse</button>
            </span>
            <span>
                <input placeholder='Day number...' />
                <button>Search</button>
            </span>
        </section>
    )
}

export default CountryFilter