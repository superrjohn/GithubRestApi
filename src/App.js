import React from 'react'
import {  HashRouter } from 'react-router-dom'

import GetRoutes from './router'

import './asset/App.css'

export default function App() {
  return(
    <div className='App'>
      <HashRouter>
        <GetRoutes/>
      </HashRouter>
    </div>
  )
}