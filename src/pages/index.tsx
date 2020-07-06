// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { css } from '@emotion/core'


const mv = require('../../static/memo.png')
const mvs = require('../../static/memosmaho.png')

const breakpoints = [360, 500, 1175, 1200]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges


  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <picture>
        <source srcSet={mvs} media="(max-width: 500px)" />
        <img src={mv} />
      </picture>
      {console.log(window.innerWidth)}
      <div css={{
        margin: 'auto',
        overflow: 'hidden',
        height: `100 %`,
        '&::after': {
          content: '""',
          display: `block`,
          clear: `both`
        },
      }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link css={{
              boxShadow: `none`,
            }} to={node.fields.slug}>
              <article key={node.fields.slug}
                css={{
                  display: 'block',
                  backgroundColor: '#ede7cf',
                  opacity: 1,
                  border: 'solid 1px rgb(223,223,223)',
                  width: rhythm(24),
                  margin: `${rhythm(1)} ${rhythm(0.5)} 0`,
                  paddingLeft: `${rhythm(1)}`,
                  float: "left",
                  color: "#aa512f",
                  transition: ".3s",
                  ':hover': {
                    opacity: 0.7,
                  },
                  [mq[2]]: {
                    width: rhythm(22),
                    margin: "auto",
                    marginTop: rhythm(0.5),
                  },
                  [mq[2]]: {
                    width: rhythm(22),
                    float: 'none',
                    margin: "auto",
                    marginTop: rhythm(0.5),
                  },
                  [mq[1]]: {
                    width: rhythm(15),
                    float: 'none',
                    margin: "auto",
                    marginTop: rhythm(0.5),
                  },
                  [mq[0]]: {
                    margin: "auto",
                    marginTop: rhythm(0.5),
                    width: rhythm(13),
                    float: 'none',
                  }
                }}
              >
                <header>
                  <h3
                    css={{
                      marginTop: rhythm(1),
                      marginBottom: rhythm(1.5),
                    }}
                  >
                    {title}
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            </Link>

          )
        })}
      </div>
    </Layout >
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
