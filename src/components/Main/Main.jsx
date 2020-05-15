import React from 'react'
import Header from '../Header/Header'
import CountrySection from '../CountrySection/CountrySection'
import world from '../../assets/flags/united-nations.svg'
import './Main.scss'

const Main = ({ summary }) => {
    return (
        <main>
            <Header icon={world} global={summary.Global} />
            <section>
                {summary.Countries.map(item => (
                    <CountrySection
                        Country={item.Country}
                        TotalConfirmed={item.TotalConfirmed}
                        NewConfirmed={item.NewConfirmed}
                        TotalDeaths={item.TotalDeaths}
                        NewDeaths={item.NewDeaths}
                        TotalRecovered={item.TotalRecovered}
                        NewRecovered={item.NewRecovered} />)
                )}
            </section>
        </main>
    )
}

export default Main