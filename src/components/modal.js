import React from 'react'
import Img from "gatsby-image"

import "./modal.scss"

const Modal = ({ document, closeModal, windowClose }) => {
  return (
    <div 
      id={document.id}
      role="button"
      tabIndex="0"
      className="modal"
      onClick={(e) => windowClose(e.target.id)}
      onKeyDown={(e) => windowClose(e.target.id)}
    >
      <div className="modal__content">
        <span
          className="modal__btn-close"
          role="button"
          tabIndex="0"
          onClick={() => closeModal()}
          onKeyDown={() => closeModal()}
        >
          &times;
        </span>
        <Img
          className="modal__image"
          fluid={document.image.childImageSharp.fluid}
          title={document.seo_image.title}
          alt={document.seo_image.alt}
        />
        <div className="modal__body">
          <h2 className="modal__title">{document.name}</h2>
          <p className="modal__text ficha__texto">
            {document.long_description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal