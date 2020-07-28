import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

const Header = () => (
  <header>
    <ul className="container">
      <li>
        <Link to="/">Inicio</Link>
        {/* <a href="#Inicio">Inicio</a> */}
      </li>

      <li>
        <Link to="#nosotros">Nosotros</Link>
        {/* <a href="#Nosotros">Nosotros</a> */}
      </li>

      <li>
        <Link to="/productos">Productos</Link>
        {/* <a href="#Productos">Productos</a> */}
      </li>

      <li>
        <Link to="/contacto">Contacto</Link>
        {/* <a href="#Contacto">Contacto</a> */}
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
