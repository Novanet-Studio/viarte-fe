import React from "react"

const Footer = () => (

  <footer>
    <div className="container">
      <p>
        Derechos reservados © {new Date().getFullYear()} | desarrollado por:
        <a
          href="http://www.gruponovanet.com.ve/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Novanet
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
