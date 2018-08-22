/**
 * route.js
 */

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './page/Home/Home'
import { About } from './page/About/About'
import { Breakfast } from './page/Breakfast/Breakfast'

export class Routes extends React.Component {
  render() {
    return (
      <Router>
			 <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/breakfast" component = {Breakfast} />
				<Route render = { () => {
					return <p>404</p>
			  }} />
			 </Switch>
			</Router>
    )
  }
}
