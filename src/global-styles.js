import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0;
    direction: ${props => props.theme.direction}
  }


  ul {
    list-style-type: none;
    padding-left: 0;
    padding-right: 0;
  }
`

export default GlobalStyles
