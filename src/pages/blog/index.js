import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout/layout'
import './index.css'
import { Helmet } from "react-helmet"

const Index = ({data}) => {
  return (
	<>
  <Helmet>
          <meta charSet="utf-8" />
          <title>All Blogs | Muqoddas</title>
        {/*<link rel="canonical" href="http://muqoddas.github.io/blog/" />*/}
        </Helmet>
  <Layout>
    <div className="py-5">
    	<div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
          {
            data.allContentfulPost.nodes.map(node => (
              <div key={node.id} className="col">
              <Link to={node.blogPath} className="text-dark text-decoration-none">
                <div className="card card-hover mb-3" style={{maxHeight: '500px'}}>
                  <img src={node.hero.file.url} className="card-img-top" alt="photos" style={{maxHeight: '150px'}}/>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h5 className="card-title">{node.title}</h5>
                    <p className="m-0">{node.createdAt}</p>
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
  allContentfulPost(filter: {node_locale: {eq: "id-ID"}}) {
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
      createdAt(formatString: "HH:MM DD MMM YYYY")
    }
  }
}
`

export default Index
