import React from "react"
import { Link } from "gatsby"

const linkActivo = {
  borderBottom: 2,
  borderBottomStyle: "solid",
  borderBottomColor: "#f36f21",
}

const linkStyles = {}

const Navigation = () => (
  <nav>
    <Link
      to="/"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Inicio"
    >
      Inicio
    </Link>
    <Link
      to="/nosotros"
      activeStyle={linkActivo}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...linkActivo } }
          : null
      }
      aria-label="Ir al vínculo de Nosotros"
    >
      Nosotros
    </Link>
    <Link
      to="/productos"
      activeStyle={linkActivo}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...linkActivo } }
          : null
      }
      aria-label="Ir al vínculo de Productos"
    >
      Productos
    </Link>
    {/* <Link 
      to="/vallas" 
      activeStyle={linkActivo}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...linkActivo } }
          : null
      }  
      aria-label="Ir al vínculo de Vallas">
      Vallas
    </Link>
    <Link 
      to="/blog" 
      activeStyle={linkActivo}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...linkActivo } }
          : null
      }  
      aria-label="Ir al vínculo de Blog">
      Blog
    </Link> */}
    <Link
      to="/contacto"
      activeStyle={linkActivo}
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent
          ? { style: { ...linkStyles, ...linkActivo } }
          : null
      }
      aria-label="Ir al vínculo de Contacto"
    >
      Contacto
    </Link>
  </nav>
)

export default Navigation
