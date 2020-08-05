import React, { Component } from 'react'
import { Carousel } from "antd"
import logo from "../assets/images/logo.svg"

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
}

const Inicio = ({ content }) => (
  <section id="Inicio">
    {/* {console.log("from inicio:", content)} */}
    <Carousel {...settings}>
      <div className="bg1">
        <div className="container">
          <p>
            <span>Somos</span> una compañía de publicidad exterior.
          </p>
        </div>
      </div>

      <div className="bg2">
        <div className="container">
          <p>
            <span>Nos especializamos</span> en vallas publicitarias.
          </p>
        </div>
      </div>

      <div className="bg3">
        <div className="container">
          <p>
            <span>Adaptadas</span> siempre a su arte.
          </p>
        </div>
      </div>
    </Carousel>

    <div className="container">
      <div className="valla">
        <img
          src={logo}
          alt="logo de Viarte incrustado en una valla de publicidad exterior con fondo blanco"
        />
        <h1>Su arte en la vía</h1>
      </div>
    </div>
    <div className="ciudad-svg" />
  </section>
)

export default Inicio