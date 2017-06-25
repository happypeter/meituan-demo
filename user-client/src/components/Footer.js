import React from 'react'
import '../css/footer.css'
import HomeIcon from './HomeIcon'

const Footer = () => (
  <div className="footer">
    <HomeIcon active={true} />
    <HomeIcon active={false} />
  </div>
)

export default Footer
