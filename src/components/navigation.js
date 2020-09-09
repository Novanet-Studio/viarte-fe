import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const linkActivo = {
  borderBottom: 2,
  borderBottomStyle: "solid",
  borderBottomColor: "#f36f21",
}

const linkStyles = {}

const Navigation = () => (
  <nav>
    <AniLink
      cover
      direction="right"
      duration={0.75}
      bg="#f36f21"
      to="/"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Inicio"
    >
      Inicio
    </AniLink>
    <AniLink
      fade
      duration={0.75}
      to="/nosotros"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Nosotros"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
      }
    >
      Nosotros
    </AniLink>
    <AniLink
      paintDrip
      color="#00a5e7"
      duration={0.75}
      to="/productos"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Productos"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
      }
    >
      Productos
    </AniLink>
    <AniLink
      paintDrip
      color="#00a5e7"
      duration={0.75}
      to="/mapas"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Ubicaciones"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
      }
    >
      Ubicaciones
    </AniLink>
    <AniLink
      swipe
      top="entry"
      entryOffset={80}
      to="/contacto"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Contacto"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
      }
    >
      Contacto
    </AniLink>
  </nav>
)

export default Navigation
