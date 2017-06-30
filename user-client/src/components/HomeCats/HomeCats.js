import React, { Component } from 'react'
import DinnerIcon from './DinnerIcon'
import FastFootIcon from './FastFoodIcon'
import ShopIcon from './ShopIcon'
import TeaIcon from './TeaIcon'
import DeliverIcon from './DeliverIcon'
import FruitIcon from './FruitIcon'
import BestIcon from './BestIcon'
import AllIcon from './AllIcon'
import '../../css/home-cats.css'

class Cats extends Component {
  render() {
    return(
      <div className="home-cats">
        <div className="row">
          <FastFootIcon />
          <DinnerIcon />
          <ShopIcon />
          <TeaIcon />
        </div>
        <div className="row">
          <DeliverIcon />
          <FruitIcon />
          <BestIcon />
          <AllIcon />
        </div>
      </div>
    )
  }
}

export default Cats
