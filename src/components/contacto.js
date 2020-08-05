// import { graphql } from "gatsby"
import React from 'react'

const Contacto = () => (
  <section id="Contacto">
    <h2>Contacto</h2>
    <div className="container">
      <address>
        <i class="fas fa-envelope-open"></i>
        <p>director@viarte.net</p>

        <i class="fas fa-phone"></i>
        <p>0212.414.65.99</p>
      </address>

      <form>
        <input type="text" name="Nombre" placeholder="Nombre" />
        <input type="email" name="Correo" placeholder="Correo" />
        <input type="tel" name="Teléfono" placeholder="Teléfono" />
        <textarea rows="2" cols="100" placeholder="Mensaje" />
        <input type="submit" value="Enviar"/>
      </form>
    </div>

    <div className="ciudad-svg"></div>
  </section>
)

export default Contacto
