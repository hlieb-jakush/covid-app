import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './state/store'
import App from './App'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router basename="/covid-app/">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)