import React from 'react'
import { fireEvent } from 'react-testing-library'
import { r } from 'test-utils'
import BackButton from './BackButton'

describe('BackButton', () => {
  it('should render a button with "Back" text', () => {
    const { queryByText } = r(<BackButton />)

    expect(queryByText('Back')).toBeInTheDocument()
  })

  it('should move to previous screen on click', () => {
    const { queryByText, store } = r(<BackButton />)
    const currentScreen = store.getState().questionnaire.currentScreen

    fireEvent.click(queryByText('Back'))

    expect(store.getState().questionnaire.currentScreen).toEqual(
      currentScreen - 1
    )
  })
})
