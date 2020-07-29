import React, { useState } from "react"
import { Modal, Button } from "antd"
import "antd/dist/antd.css"

import Mascara from "../assets/images/mascara.svg"

const Productos = ({ content }) => {
  const INITIAL_STATE = [
    { id: 1, show: false },
    { id: 2, show: false },
    { id: 3, show: false },
    { id: 4, show: false },
    { id: 5, show: false },
  ]
  const [status, setStatus] = useState([...INITIAL_STATE])

  return (
    <section id="Productos">
      <h2>Productos Publicitarios</h2>
      <ul className="container">
        {content.map((data, id) => (
          <li key={id}>
            {/* <img className="vallas" src={Mascara} alt={data.title} /> */}
            <img
              className="mascara"
              src={data.thumbnail.publicURL}
              alt={data.title}
            />
            <h3>{data.title}</h3>
            <p>{data.short_description}</p>
            <Button
              type="primary"
              data-id={id + 1}
              onClick={(e) => {
                setStatus(
                  status.map((s) =>
                    s.id === Number(e.currentTarget.dataset.id)
                      ? { id: s.id, show: true }
                      : { id: s.id, show: false }
                  )
                )
              }}
            >
              Leer más
            </Button>
            <Modal
              title={data.title}
              visible={status[id].show}
              onCancel={() => {
                setStatus(
                  status.map((s) =>
                    s.show === true
                      ? { id: s.id, show: false }
                      : { id: s.id, show: false }
                  )
                )
              }}
            >
              <img src={data.thumbnail.publicURL} alt={data.title} />
              <p>{data.description}</p>
            </Modal>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Productos
