import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

const Header = () => (
  <header>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
