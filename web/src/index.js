import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
// import 'bootstrap'

import configureStore from './store'
import { Provider } from 'react-redux'

import './style/utilities.scss'
import './style/global.scss'

import App from './container/App'

const store = configureStore()

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
