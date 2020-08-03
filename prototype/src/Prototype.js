import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Article from './Article'
import DevelopmentOverview from './Development/DevelopmentOverview'
import SubmissionDevelopment from './Development/SubmissionDevelopment'
import SubmissionCritique from './Development/SubmissionCritique'
import './Prototype.css'

function Prototype() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/page/:article/work"
          component={DevelopmentOverview}
        />
        <Route
          exact path="/page/:article/version/:submission/critique/:critique"
          component={SubmissionCritique}
        />
        <Route
          exact path="/page/:article/version/:submission/work"
          component={SubmissionDevelopment}
        />
        <Route
          exact path="/page/:article/version/:submission"
          component={Article}
        />
      </Switch>
    </Router>
  )
}

export default Prototype
