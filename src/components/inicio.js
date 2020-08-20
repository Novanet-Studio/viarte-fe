import React from 'react'
import { Carousel } from "antd"
import logo from "../assets/images/logo.svg"
import bg1 from "../assets/images/caracas-bg1.jpg"
import bg2 from "../assets/images/caracas-bg2.jpg"
import bg3 from "../assets/images/caracas-bg3.jpg"
import ReactMarkdown from "react-markdown"

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
}

/* Test */

const Inicio = ({ content }) => (
  <section id="Inicio">
    <Carousel {...settings}>
      {content.map((data, id) => (
        <div className={`bg${id+1}`}>
          <div className="container">
            <ReactMarkdown 
              source={data.content}
              escapeHtml={true}
            />
          </div>
          <img  className="bgsli" src={bg1}/>
        </div>
      ))}
      {/* <div className="bg1">
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
      </div> */}
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