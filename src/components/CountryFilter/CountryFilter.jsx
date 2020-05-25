import React from 'react'

const CountryFilter = ({ displayType, filterType, setDefaultFilter, setReverseFilter }) => {
    return (
        <section className='covid-app__section covid-app__filter'>
            <span>
                <span>Sorted by:</span>
                <button
                    className={`covid-app__button ${filterType === 'default' ? 'covid-app__button_selected' : null}`}
                    onClick={setDefaultFilter}
                >Default</button>
                <button
                    className={`covid-app__button ${filterType === 'reverse' ? 'covid-app__button_selected' : null}`}
                    onClick={setReverseFilter}
                >Reverse</button>
            </span>
        </section>
    )
}

export default CountryFilter