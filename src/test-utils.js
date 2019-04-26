import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/macro'
import { createStore } from './store'
import theme from './theme'
import { render } from 'react-testing-library'

export const r = C => {
  const store = createStore()

  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>{C}</ThemeProvider>
      </Provider>
    ),
    store
  }
}
