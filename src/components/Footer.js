import React from 'react'
import Bio from '../components/bio'
import { rhythm } from "../utils/typography"

const Footer = () => {
    return (
        <footer css={{
            backgroundColor: '#ddbc89',
            marginTop: rhythm(4),
            paddingTop: rhythm(4),
            paddingLeft: rhythm(1),
            paddingBottom: rhythm(2),
            borderTop: 'solid 1px rgb(223,223,223)'
        }}>
            <Bio />
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    )
}

export default Footer;