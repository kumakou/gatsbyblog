import React from 'react'
import Bio from '../components/bio'

const Footer = () => {
    return (
        <footer style={{
            marginTop: '100px',
            paddingTop: "100px",
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