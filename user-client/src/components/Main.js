import React, { Component } from 'react'
import Home from './Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const About = () => <h1>About</h1>
const Faq = () => <h1>Faq</h1>

class Main extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
        </div>
      </Router>
    )
  }
}

export default Main
