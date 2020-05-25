import React from 'react'
import './FilterToggle.scss'

const FilterToggle = ({ displayType, onList, onChart }) => {
    return (
        <span className='filter__toggle'>
            <button
                className={`covid-app__button ${displayType === 'list' ? 'covid-app__button_selected' : null}`}
                onClick={onList}
            >List</button>
            <button
                className={`covid-app__button ${displayType === 'chart' ? 'covid-app__button_selected' : null}`}
                onClick={onChart}
            >Chart</button>
        </span>
    )
}

export default FilterToggle