import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/layout'
import {Helmet} from 'react-helmet'

const Index = () => {
  return (
  	<>
	<Helmet>
          <meta charSet="utf-8" />
          <title>Muqoddas Blog</title>
		  <link rel="icon" type="image/png" href="./icon.png" />
          {/*<link rel="canonical" href="http://muqoddas.github.io" />*/}
    </Helmet>
  	<Layout>
	  	<div className="py-5">
		  	<div className="container">
		  		<h1>HOME</h1>
		  	</div>
	  	</div>
  	</Layout>
  	</>
  )
}

export default Index
