import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onInitialization, onSetCountry } from './state/thunks'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { getInitStatus, getWorld, getCountriesFiltered, getDaysFiltered } from './state/selectors'
import { numberConverter } from './tools/numberConverter'

function App({ isInit, onInitialization, ...props }) {

  useEffect(() => {
    onInitialization()
  }, [])

  if (!isInit) return <div>Loading...</div>

  return (
    <div className='covid-app'>
      <Sidebar />
      <Main {...props} numberConverter={numberConverter} />
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