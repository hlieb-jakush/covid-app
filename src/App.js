import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onInitialization, onSetCountry } from './state/thunks'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { getInitStatus, getWorld, getCountriesFiltered, getDaysFiltered } from './state/selectors'

function App({ isInit, world, countriesList, daysList, onInitialization, onSetCountry }) {
  useEffect(() => {
    onInitialization()
  }, [])

  if (!isInit) return <div>Loading...</div>

  return (
    <div className='covid-app'>
      <Sidebar />
      <Main world={world} countriesList={countriesList} daysList={daysList} onSetCountry={onSetCountry} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isInit: getInitStatus(state),
  world: getWorld(state),
  countriesList: getCountriesFiltered(state),
  daysList: getDaysFiltered(state)
})

export default connect(mapStateToProps, { onInitialization, onSetCountry })(App)