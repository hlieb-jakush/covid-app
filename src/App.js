import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onInitialization } from './state/reducer'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App({ initialized, onInitialization, summary }) {
  useEffect(() => onInitialization(), [])

  if (!initialized) return <div>Loading...</div>

  return (
    <div className='covid-app'>
      <Sidebar />
      <Main summary={summary} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  initialized: state.initialized,
  summary: state.summary
})

export default connect(mapStateToProps, { onInitialization })(App)