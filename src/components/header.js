import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar" id="mynavbar">
    <Link to="/" activeClassName="active">
      Home
    </Link>
    <Link to="/faq/" activeClassName="active">
      FAQ
    </Link>
    <Link to="/setup/" activeClassName="active">
      ModLoader64 Setup
    </Link>
    <Link to="/sdk/" activeClassName="active">
      SDK Setup
    </Link>
    <Link to="/mods/" activeClassName="active">
      Community Mods
    </Link>
    <Link to="/models/" activeClassName="active">
      Playas Models
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
