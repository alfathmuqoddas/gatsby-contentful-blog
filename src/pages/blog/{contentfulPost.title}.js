import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout/layout'
import { Helmet } from "react-helmet"

const blogPost = ({data}) => {
	return (
		<>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{data.contentfulPost.title} | Muqoddas</title>
          {/*<link rel="canonical" href="http://muqoddas.github.io/blog/" />*/}
        </Helmet>
			<Layout>
				<div className="py-5">
					<div className="mx-auto" style={{maxWidth: '800px'}}>
					<h1>{data.contentfulPost.title}</h1>
					<p>{data.contentfulPost.createdAt}</p>
					<img className="img-fluid my-4" src={data.contentfulPost.hero.file.url} alt="blog post" />
					<div dangerouslySetInnerHTML={{ __html: data.contentfulPost.body.childMarkdownRemark.html }} />
					</div>
				</div>
			</Layout>
		</>
	)
}

export const query = graphql`
query ($id: String) {
  contentfulPost(id: {eq: $id}) {
    title
    hero {
      file {
        url
      }
    }
    body {
      childMarkdownRemark {
        html
      }
    }
    createdAt(formatString: "HH:MM DD MMM YYYY")
  }
}
`

export default blogPost