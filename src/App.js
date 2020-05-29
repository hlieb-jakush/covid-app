import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onInitialization, onSetCountry } from './state/thunks'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { getInitStatus, getWorld, getSidebarStatus } from './state/selectors'
import { numberConverter } from './tools/numberConverter'
import Loader from './components/Loader/Loader'
import { setSidebarOpen, setSidebarClose } from './state/actionCreators'

function App({ isInit, onInitialization, isSidebarOpen, setSidebarOpen, setSidebarClose, ...props }) {

  useEffect(() => {
    onInitialization()
  }, [onInitialization])

  if (!isInit) return <Loader />

  return (
    <div className='covid-app'>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarClose={setSidebarClose} />
      <Main {...props} numberConverter={numberConverter} setSidebarOpen={setSidebarOpen} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isInit: getInitStatus(state),
  world: getWorld(state),
  isSidebarOpen: getSidebarStatus(state)
})

export default connect(mapStateToProps, { onInitialization, onSetCountry, setSidebarOpen, setSidebarClose })(App)