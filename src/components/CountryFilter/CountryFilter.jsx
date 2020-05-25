import React from 'react'
import FilterToggle from '../FilterToggle/FilterToggle'

const CountryFilter = ({ displayType, filterType, setDefaultFilter, setReverseFilter, setListType, setChartType }) => {
    return (
        <section className='covid-app__section covid-app__filter'>
            <span>
                <span>Sorted by:</span>
                <button
                    className={`covid-app__button ${filterType === 'default' ? 'covid-app__button_selected' : null}`}
                    disabled={displayType === 'chart'}
                    onClick={setDefaultFilter}
                >Default</button>
                <button
                    className={`covid-app__button ${filterType === 'reverse' ? 'covid-app__button_selected' : null}`}
                    disabled={displayType === 'chart'}
                    onClick={setReverseFilter}
                >Reverse</button>
            </span>
            <FilterToggle displayType={displayType} setListType={setListType} setChartType={setChartType} />
        </section>
    )
}

export default CountryFilter