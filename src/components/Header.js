import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { useSiteMetadata } from './queries'


const Header = () => {
    const siteMetadata = useSiteMetadata();
    return (
        <div>
            <h1 style={{
                ...scale(1.5),
                marginBottom: rhythm(1.5),
                paddingBottom: '30px',
                marginTop: 0,
                borderBottom: 'solid 1px rgb(223,223,223)'
            }}><Link style={{
                boxShadow: `none`,
                color: `inherit`,
            }}
                to={'/'}>
                    {siteMetadata.title}
                </Link>
            </h1>
        </div>
    )
}
export default Header;