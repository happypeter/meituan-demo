import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const About = () => <h1>About</h1>
const Faq = () => <h1>Faq</h1>

class Main extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
        </div>
      </Router>
    )
  }
}

export default Main
