import React from 'react'
import './DayFilter.scss'

const DayFilter = ({ activeButton, setDefaultFilter, setReverseFilter }) => {
    return (
        <section className='filter'>
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

export default DayFilter