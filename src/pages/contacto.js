import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import { Form } from "react-final-form"
import { Field } from "react-final-form-html5-validation"
import SEO from "../components/seo"
import "./contacto.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* eslint-disable */
let faicon = null
let faprefix = null

// Join values taken form user's input
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Contact page component
const ContactPage = () => {
  // React state management access
  const [state, setState] = React.useState({})
  // Handle input changes
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  // Submmit the form values
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }
  // Static Query
  const { strapiContact } = useStaticQuery(
    graphql`
      query {
        strapiContact {
          seo {
            title
            description
            image
          }
          info {
            id
            prefix
            icon
            content
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO
        title={strapiContact.seo.title}
        description={strapiContact.seo.description}
      />
      <div
        className="contacto"
        /* title={data.strapiContact.seo_image.title}
      alt={data.strapiContact.seo_image.alt} */
      >
        <div className="contenedor">
          <h1>{strapiContact.seo.title}</h1>
          <div className="contacto__info">
            <ul>
              {strapiContact.info.map((document) => (
                <li key={document.id}>
                  <FontAwesomeIcon
                    icon={[
                      (faprefix = document.prefix.replace(/'/g, "")),
                      (faicon = document.icon.replace(/'/g, "")),
                    ]}
                    fixedWidth
                    size="lg"
                  />
                  <span>{document.content}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contacto__form">
            <h2>Envíanos un mensaje</h2>
            <Form
              onSubmit={handleSubmit}
              render={({ handleSubmit, pristine, invalid }) => (
                <form
                  id="contact-form"
                  className="contact_form"
                  name="contact"
                  method="post"
                  action="/thank-you/"
                  // Netlify form
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>
                  <label className="oculto">Nombre</label>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    required
                    maxLength={20}
                    tooLong="Este nombre es muy largo"
                    pattern="[A-Z].+"
                    placeholder="Nombre"
                  />
                  <label className="oculto">Correo</label>
                  <Field
                    name="email"
                    type="email"
                    typeMismatch="Este no es un correo electrónico válido"
                    component="input"
                    required
                    placeholder="Correo"
                  />
                  <label className="oculto">Teléfono</label>
                  <Field
                    name="tel"
                    type="tel"
                    typeMismatch="Este no es un teléfono válido"
                    component="input"
                    required
                    placeholder="Teléfono"
                  />
                  <label>Mensaje</label>
                  <Field name="message" component="textarea" required />
                  <button type="submit">Enviar &#9654;</button>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
