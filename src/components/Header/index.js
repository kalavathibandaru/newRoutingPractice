// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const {name} = props
  return (
    <nav className="header-element">
      <div className="logo-element">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="image"
        />
        <p className="logo-text">Wave</p>
      </div>
      <ul className="nav-elements">
        <li>
          <Link className="nav" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
