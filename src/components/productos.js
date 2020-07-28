import React, { useState } from "react"
import { Modal, Button } from "antd"
import "antd/dist/antd.css"

import Mascara from '../assets/images/mascara.svg'

const Productos = ({content}) => {
  const [modalVisible, setModalVisible] = useState([
    { id: 1, show: false },
    { id: 2, show: false },
    { id: 3, show: false },
    { id: 4, show: false },
    { id: 5, show: false },
  ])

  console.log(
    'from products:',
    content
  )

  return (
    <section id="Productos">
      <h2>Productos Publicitarios</h2>
      <ul className="container">
        {content.map((data, id) => (
          <li key={id}>
            <img
              className="vallas"
              src={Mascara}
              alt={data.title}
            />
            <h3>{data.title}</h3>
            <p>{data.short_description}</p>
            <Button type="primary" data-id={id + 1} onClick={e => {
              // console.log(e.currentTarget.dataset.id)
              // setModalVisible([{ id: e.currentTarget.dataset.id, show: true }, ...modalVisible])
              setModalVisible(modalVisible.map(m => {
                if (m.id === e.currentTarget.dataset.id) {
                  return {id, show: true}
                } else {
                  return {id, show: false}
                }
              }))
            }}>
              Leer más
            </Button>
            <Modal
              title={data.title}
              // visible={modalVisible[id].show}
              visible={false}
              onCancel={e => {
                console.log(id + 1)
                setModalVisible([{ id: id+1, show: false }, ...modalVisible])
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
