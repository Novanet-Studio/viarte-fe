import React from 'react'

// Images
import logopie from "../assets/images/logo.svg"
import Novanet from "../assets/images/logo-nn.svg"

const Footer = ({}) => (
  // <footer>
  //   © {new Date().getFullYear()}, Built with
  //   {` `}
  //   <a href="https://www.gatsbyjs.org">Gatsby</a>
  // </footer>
  <footer>
    <div className="container">
      <img src={logopie} alt="logopie" />

      <ul>
        <li>
          <a href="#Inicio">Inicio</a>
        </li>

        <li>
          <a href="#Nosotros">Nosotros</a>
        </li>

        <li>
          <a href="#Productos">Productos</a>
        </li>

        <li>
          <a href="#Contacto">Contacto</a>
        </li>
      </ul>

      <ul className="rrss">
        <li>
          <i className="fab fa-facebook-f" />
        </li>
        <li>
          <i className="fab fa-twitter" />
        </li>
        <li>
          <i className="fab fa-instagram" />
        </li>
      </ul>

      <p>
        Derechos reservados © 2019 | desarrollado por:
        <a
          href="http://www.gruponovanet.com.ve/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Novanet} alt="Novanet" />
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
