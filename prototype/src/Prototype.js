import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Article from './Article';
import logo from './logo.svg'
import './Prototype.css'

function Prototype() {
  return (
    <Router>
      <Switch>
        <Route
          path="/page/:article/:version"
          component={Article}
        />
      </Switch>
    </Router>
  )
}

export default Prototype
