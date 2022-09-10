import styled, { createGlobalStyle } from 'styled-components'

import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'consts'
import colors from 'consts/colors'


//
// Global tags styling
//

export const AppStyles = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    color: #5e5873;
    min-width: 320px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    color: ${colors.primary};
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  tr,
  td,
  th,
  p,
  button,
  ul,
  li,
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1, .h1 {
    font-size: 26px;
  }

  h2, .h2 {
    font-size: 22px;
  }

  h3, .h3 {
    font-size: 18px;
  }

  h4, .h4 {
    font-size: 16px;
  }

  p, li {
    line-height: 21px;
  }
`


//
// Global app styled components
//

export const PageWrapper = styled.div`
  padding: 20px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
`

export const Footer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: #fff;
  height: ${FOOTER_HEIGHT};

  > :last-child {
    cursor: pointer;
  }
`
