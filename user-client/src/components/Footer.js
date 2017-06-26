import React from 'react'
import '../css/footer.css'
import HomeIcon from './HomeIcon'
import UserIcon from './UserIcon'
import OrderIcon from './OrderIcon'
import {
  Link
} from 'react-router-dom'

const Footer = () => (
  <div className="footer">
    <div className="item">
      <Link to="/">
        <HomeIcon active={true} />
      </Link>
    </div>
    <div className="item">
      <Link to="/">
        <OrderIcon active={true} />
      </Link>
    </div>
    <div className="item">
      <Link to="/">
        <UserIcon active={true} />
      </Link>
    </div>
  </div>
)

export default Footer
