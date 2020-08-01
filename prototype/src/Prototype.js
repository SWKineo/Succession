import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Article from './Article'
import ArticleDevelopment from './ArticleDevelopment'
import './Prototype.css'

function Prototype() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/page/:article/development"
          component={ArticleDevelopment}
        />
        <Route
          path="/page/:article/:version"
          component={Article}
        />
      </Switch>
    </Router>
  )
}

export default Prototype
