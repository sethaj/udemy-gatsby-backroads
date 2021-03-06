import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  const { site: { siteMetadata } } = useStaticQuery(getSiteData)

  return (
    <div>
      <h1>title: {siteMetadata.title} </h1>
      <h1>author: {siteMetadata.author}</h1>
    </div>
  )
}

export default Header
