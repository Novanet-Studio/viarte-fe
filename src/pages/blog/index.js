import React from 'react'
import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Layout from '../../components/layout'

const IndexBlog = ({ data }) => (
  <Layout>
    <div style={{
      padding: '20px',
      marginTop: '20px',
      border: '1px solid #ccc'
    }}>
      <h1>Viarte Blog</h1>
      <p>Welcome to the blog</p>
      <ul>
        {data.allStrapiEntrada.edges.map((item) => (
          <li key={item.node.id}>
            <h2>
              <Link to={`/blog/${item.node.Slug}`}>{item.node.title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexBlog

export const query = graphql`
  query IndexBlog {
    allStrapiEntrada {
      edges {
        node {
          id
          title
          Slug
        }
      }
    }
  }
`