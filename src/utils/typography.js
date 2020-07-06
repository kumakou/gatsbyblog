import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

const typography = new Typography({
  headerFontFamily: ['Nunito', 'Kosugi'],
  bodyFontFamily: ['Nunito', 'Kosugi'],
  baseFontSize: "16px",
  baseLineheight: 1.666,
  googleFonts: [
    {
      name: 'Kosugi',
      styles: []
    },
    {
      name: 'Nunito',
      styles: ['600']
    }
  ],
  'h1, h2, h3': {
    fontFamily: ['Nunito', 'M + PLUS + Rounded + 1c']
  }
},
)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
