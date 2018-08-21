/**
 * route.js
 */

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './page/Home/Home'
import { About } from './page/About/About'

export class Routes extends React.Component {
  render() {
    return (
      <Router>
			 <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/about" component = {About} />
				<Route render = { () => {
					return <p>404</p>
			  }} />
			 </Switch>
			</Router>
    )
  }
}
