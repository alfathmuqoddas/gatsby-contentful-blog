import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../layout/layout'

const blogPost = ({data}) => {
	return (
		<>
			<Layout>
				<div className="py-5">
					<div className="mx-auto" style={{maxWidth: '800px'}}>
					<h1>{data.contentfulPost.title}</h1>
					<p>{data.contentfulPost.date}</p>
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
    date(formatString: "DD MMM YYYY")
  }
}
`

export default blogPost