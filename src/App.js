import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onInitialization, onSetCountry } from './state/thunks'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { getInitStatus, getWorld } from './state/selectors'
import { numberConverter } from './tools/numberConverter'
import Loader from './components/Loader/Loader'

function App({ isInit, onInitialization, ...props }) {

  useEffect(() => {
    onInitialization()
  }, [onInitialization])

  if (!isInit) return <Loader />

  return (
    <div className='covid-app'>
      <Sidebar />
      <Main {...props} numberConverter={numberConverter} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isInit: getInitStatus(state),
  world: getWorld(state)
})

export default connect(mapStateToProps, { onInitialization, onSetCountry })(App)