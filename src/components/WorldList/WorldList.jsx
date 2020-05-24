import React from 'react'
import WorldListItem from '../WorldListItem/WorldListItem'
import { NavLink } from 'react-router-dom'

const WorldList = ({ worldList, numberConverter }) => {
    return (
        <section className='covid-app__section covid-app__section_list'>
            {
                worldList.map(item => (
                    <NavLink to={`/${item.Slug}`} key={item.Country}>
                        <WorldListItem
                            Country={item.Country}
                            TotalConfirmed={item.TotalConfirmed}
                            NewConfirmed={item.NewConfirmed}
                            TotalDeaths={item.TotalDeaths}
                            NewDeaths={item.NewDeaths}
                            TotalRecovered={item.TotalRecovered}
                            NewRecovered={item.NewRecovered}
                            numberConverter={numberConverter}
                        />
                    </NavLink>)
                )
            }
        </section>

    )
}

export default WorldList