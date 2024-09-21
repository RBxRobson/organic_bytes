import { createGlobalStyle } from 'styled-components'

import {
  PPBold,
  PPLight,
  PPMedium,
  PPRegular,
  PPSemiBold
} from '../assets/fonts'

const fontFace = (src: string, weight = 400) => `
  @font-face {
    font-family: 'Poppins';
    src: url(${src});
    font-weight: ${weight};
  }
`

const GlobalStyles = createGlobalStyle`
  ${fontFace(PPLight, 300)}
  ${fontFace(PPRegular, 400)}
  ${fontFace(PPMedium, 500)}
  ${fontFace(PPSemiBold, 600)}
  ${fontFace(PPBold, 700)}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
