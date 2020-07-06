import React from "react"
import Footer from './Footer'
import Header from '../components/Header'
import { css } from '@emotion/core'

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  return (
    <div
      css={css`
        background-color: #f9f3cf;
        margin-left: auto;
        margin-right: auto;
        padding: ${rhythm(1.5)} ${rhythm(3 / 4)},
        `
      }
    >
      <Header />
      <main css={css` 
      max-width: ${rhythm(50)};
      margin:0 auto;
      `

      }>
        {children}</main>
      <Footer />
    </div>
  )
}

export default Layout
