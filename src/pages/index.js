import React from 'react'
import { graphql } from 'gatsby'

const Index = ({data}) => {
  return (
	<>
	<ul>
      {
        data.allContentfulPost.edges.node.map(n => (
          <li key={n.id}>
            {n.title}
          </li>
        ))
      }
      </ul>
	</>
  )
}

export const query = graphql`
query {
  allContentfulPost {
    edges {
      node {
        hero {
          file {
            url
          }
        }
        title
        id
        createdAt
      }
    }
  }
}
`

export default Index
