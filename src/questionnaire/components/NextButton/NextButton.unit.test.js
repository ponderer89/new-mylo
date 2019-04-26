import React from 'react'
import { fireEvent } from 'react-testing-library'
import { r } from 'test-utils'
import NextButton from './NextButton'

describe('NextButton', () => {
  it('should render a button with "Next" text', () => {
    const { queryByText } = r(<NextButton />)

    expect(queryByText('Next')).toBeInTheDocument()
  })

  it('should move to next screen on click', () => {
    const { queryByText, store } = r(<NextButton />)
    const currentScreen = store.getState().questionnaire.currentScreen

    fireEvent.click(queryByText('Next'))

    expect(store.getState().questionnaire.currentScreen).toEqual(
      currentScreen + 1
    )
  })
})
