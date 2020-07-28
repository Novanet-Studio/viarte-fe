import React from "react"
import { Collapse } from "antd"
import Valores from '../assets/images/valores-icono.svg'
import "antd/dist/antd.css"

const { Panel } = Collapse

const Nosotros = ({ content }) => (
  <section id="Nosotros">
    <div className="container">
      {content.map((data, id) => (
        <div className="ficha" key={id}>
          <img src={data.icon.publicURL} alt={data.title} />
          <Collapse>
            <Panel header={data.title}>
              <p>{data.description}</p>
            </Panel>
          </Collapse>
        </div>
      ))}

      {/* Ul List! Es mostrada de manera independiente */}
      <div className="ficha">
        <img src={Valores} alt="Valores" />
        <Collapse>
          <Panel header="Valores" key="3">
            <ul>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Respuesta inmediata</li>
              <li>Trato cercano con nuestros clientes</li>
              <li>Adaptación a las necesidades del cliente</li>
            </ul>
          </Panel>
        </Collapse>
      </div>
    </div>
  </section>
)

export default Nosotros
