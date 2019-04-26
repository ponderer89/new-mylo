import React from 'react'
import { r } from 'test-utils'
import ScreenTitle from './ScreenTitle'

describe('ScreenTitle', () => {
  it('should render children', () => {
    const { queryByText } = r(<ScreenTitle>title</ScreenTitle>)

    expect(queryByText('title')).toBeInTheDocument()
  })
})
