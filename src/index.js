import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('main')
);