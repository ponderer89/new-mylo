import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/macro'
import theme from './theme'
import GlobalStyles from './global-styles.js'
import store from './store'
import Questionnaire from './questionnaire/Questionnaire'
import TopNav from './components/TopNav/TopNav'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <TopNav />

            <main id="main">
              <Questionnaire />
            </main>

            <GlobalStyles />
          </Fragment>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
