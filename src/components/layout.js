import React from "react"
import Footer from './Footer'
import Header from '../components/Header'

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
