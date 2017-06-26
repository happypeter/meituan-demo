import React, { Component } from 'react'
import Home from './Home'

import {
  Route
} from 'react-router-dom'

const About = () => <h1>About</h1>
const Faq = () => <h1>Faq</h1>

class Main extends Component {
  render() {
    return(
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
      </div>
    )
  }
}

export default Main
