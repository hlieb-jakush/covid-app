import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onInitialization, onSetCountry } from './state/reducer'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App({ initialized, onInitialization, onSetCountry, summary, country }) {
  useEffect(() => {
    onInitialization()
  }, [])

  if (!initialized) return <div>Loading...</div>

  return (
    <div className='covid-app'>
      <Sidebar />
      <Main summary={summary} country={country} onSetCountry={onSetCountry} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  initialized: state.initialized,
  summary: state.summary,
  country: state.currentCountry
})

export default connect(mapStateToProps, { onInitialization, onSetCountry })(App)