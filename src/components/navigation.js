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
      duration={0.55}
      bg="#f36f21"
      to="/"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Inicio"
    >
      Inicio
    </AniLink>
    <AniLink
      cover
      direction="left"
      duration={0.55}
      bg="#00a5e7"
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
      cover
      direction="right"
      duration={0.55}
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
      cover
      direction="left"
      duration={0.55}
      bg="#00a5e7"
      to="/mapas"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Vallas"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
      }
    >
      Vallas
    </AniLink>
    <AniLink
      cover
      direction="right"
      duration={0.55}
      to="/blog"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Blog"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
      }
    >
      Blog
    </AniLink>
    <AniLink
      cover
      direction="left"
      duration={0.55}
      to="/contacto"
      activeStyle={linkActivo}
      aria-label="Ir al vínculo de Contacto"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null
      }
    >
      contacto
    </AniLink>
  </nav>
)

export default Navigation
