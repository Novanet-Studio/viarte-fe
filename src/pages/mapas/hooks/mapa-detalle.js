
import { useStaticQuery, graphql } from "gatsby"

const useMapInfo = () => {
  const { strapiMap } = useStaticQuery(
    graphql`
      query mapa($id: String) {
        strapiMap(id: { eq: $id }) {
          id
          lat
          lng
          code
          location
          direction
          medidas
          ciudad
          municipio
          imagen {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )
  return strapiMap
}

export default useMapInfo