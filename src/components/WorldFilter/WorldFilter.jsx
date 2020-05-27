import React from 'react'

const WorldFilter = ({ activeButton, setDefaultFilter, setConfirmedFilter, setRecoveredFilter, setDeathFilter }) => {
    return (
        <section className='covid-app__section covid-app__filter'>
            <span>
                <span>Sorted by:</span>
                <button
                    className={`covid-app__button ${activeButton === 'default' ? 'covid-app__button_selected' : null}`}
                    onClick={setDefaultFilter}>Default</button>
                <button
                    className={`covid-app__button ${activeButton === 'confirmed' ? 'covid-app__button_selected' : null}`}
                    onClick={setConfirmedFilter}>Confirmed</button>
                <button
                    className={`covid-app__button ${activeButton === 'recovered' ? 'covid-app__button_selected' : null}`}
                    onClick={setRecoveredFilter}>Recovered</button>
                <button
                    className={`covid-app__button ${activeButton === 'death' ? 'covid-app__button_selected' : null}`}
                    onClick={setDeathFilter}>Deaths</button>
            </span>
            <span>
                <input placeholder='Country title...' />
            </span>
        </section>
    )
}

export default WorldFilter