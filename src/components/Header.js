import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { useSiteMetadata } from './queries'

const breakpoints = [500, 768, 992, 1200]

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
)

const Header = () => {
    const siteMetadata = useSiteMetadata();
    return (
        <div
            css={{
                backgroundColor: '#ede7cf'
            }}>
            <h1 css={{
                ...scale(1.5),
                margin: `0 0 ${rhythm(3)}`,
                backgroundColor: '#ddbc89',
                paddingTop: rhythm(1),
                paddingBottom: rhythm(1),
                paddingLeft: rhythm(1),
                borderBottom: 'solid 1px rgb(223,223,223)',
                transition: ".3s",
                ':hover': {
                    color: '#aa512f',
                },
                [mq[0]]: {
                    textAlign: "center",
                    marginBottom: `${rhythm(1)}`
                }
            }}><Link css={{
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