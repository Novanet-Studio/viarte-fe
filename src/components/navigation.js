import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const linkActivo = {
  borderBottom: 2,
  borderBottomStyle: "solid",
  borderBottomColor: "#f36f21",
}

const linkStyles = {}

const getPropsFn = ({ isPartiallyCurrent }) => isPartiallyCurrent ? { style: { ...linkStyles, ...linkActivo } } : null

const links = [
  {
    cover: true,
    className: 'nav__link',
    direction: 'right',
    duration: 0.55,
    bg: '#f36f21',
    to: '/',
    activeStyle: linkActivo,
    ariaLabel: 'Ir al vinculo de Inicio',
    text: 'Inicio',
  },
  {
    cover: true,
    className: 'nav__link',
    direction: 'left',
    duration: 0.55,
    bg: '#00a5e7',
    to: '/nosotros',
    activeStyle: linkActivo,
    ariaLabel: 'Ir al vinculo de Nosotros',
    getProps: getPropsFn,
    text: 'Nosotros',
  },
  {
    cover: true,
    className: 'nav__link',
    direction: 'right',
    duration: 0.55,
    to: '/productos',
    activeStyle: linkActivo,
    ariaLabel: 'Ir al vinculo de Productos',
    getProps: getPropsFn,
    text: 'Productos',
  },
  {
    cover: true,
    className: 'nav__link',
    direction: 'left',
    duration: 0.55,
    bg: '#00a5e7',
    to: '/mapas',
    activeStyle: linkActivo,
    ariaLabel: 'Ir al vinculo de Vallas',
    getProps: getPropsFn,
    text: 'Vallas',
  },
  {
    cover: true,
    className: 'nav__link',
    direction: 'right',
    duration: 0.55,
    to: '/blog',
    activeStyle: linkActivo,
    ariaLabel: 'Ir al vinculo de Blog',
    getProps: getPropsFn,
    text: 'Blog',
  },
  {
    cover: true,
    className: 'nav__link',
    direction: 'left',
    duration: 0.55,
    to: '/contacto',
    activeStyle: linkActivo,
    ariaLabel: 'Ir al vinculo de Contacto',
    getProps: getPropsFn,
    text: 'Contacto',
  },
]

const Navigation = () => (
  <nav className="nav">
    {links.map(link => (
      <AniLink {...link} >
        {link.text}
      </AniLink>
    ))}
  </nav>
)

export default Navigation
