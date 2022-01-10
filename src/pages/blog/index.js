import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout/layout'

const Index = ({data}) => {
  return (
	<>
  <Layout>
    <div className="py-5">
    	<div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
          {
            data.allContentfulPost.nodes.map(node => (
              <div key={node.id} className="col">
              <Link to={node.blogPath} className="text-dark text-decoration-none">
                <div className="card mb-3">
                  <img src={node.hero.file.url} className="card-img-top" alt="photos" />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h5 className="card-title">{node.title}</h5>
                    <p className="m-0">{node.date}</p>
                    </div>
                    <p className="card-text">{node.body.childMarkdownRemark.excerpt}</p>
                  </div>
                </div>
              </Link>
              </div>
            ))
          }
          </div>
      </div>
    </div>
  </Layout>
	</>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulPost {
    nodes {
      title
      blogPath: gatsbyPath(filePath: "/blog/{contentfulPost.title}")
      body {
        childMarkdownRemark {
          excerpt(pruneLength: 100)
        }
      }
      hero {
        file {
          url
        }
      }
      date(formatString: "DD MMM YYYY")
    }
  }
}
`

export default Index
