import React from 'react'
import {Link} from 'gatsby'
import {Helmet} from 'react-helmet'

const Layout = ({children}) => {
	return (
		<>
		<Helmet>
		  <link rel="icon" type="image/png" href="./icon.png" />
          {/*<link rel="canonical" href="http://muqoddas.github.io" />*/}
    	</Helmet>
		<nav className="navbar navbar-expand-lg navbar-dark bg-success">
		  <div className="container">
		    <Link to="/" className="navbar-brand">Contentful Blog</Link>
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		      <div class="navbar-nav">
		        <Link to="/blog" className="nav-link">Blog</Link>
		      </div>
		    </div>
		  </div>
		</nav>
		<div style={{minHeight: '100vh'}}>{children}</div>
		<div className="py-5 bg-light">
			<div className="container text-center">
			Alfath Muqoddas 2022
			</div>
		</div>
		</>
	)
}

export default Layout