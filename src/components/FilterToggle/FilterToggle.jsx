import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './FilterToggle.scss'

const FilterToggle = ({ match, displayType, setListType, setChartType }) => {
    return (
        <span className='filter__toggle'>
            <NavLink to={`/${match.params.country}`}>
                <button
                    className={`covid-app__button ${displayType === 'list' ? 'covid-app__button_selected' : null}`}
                    onClick={setListType}
                >
                    List
                </button>
            </NavLink>
            <NavLink to={`/${match.params.country}/chart`}>
                <button
                    className={`covid-app__button ${displayType === 'chart' ? 'covid-app__button_selected' : null}`}
                    onClick={setChartType}
                >
                    Chart
                </button>
            </NavLink>
        </span>
    )
}

export default withRouter(FilterToggle)