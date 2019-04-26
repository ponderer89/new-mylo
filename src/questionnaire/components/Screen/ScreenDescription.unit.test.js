import React from 'react'
import { r } from 'test-utils'
import ScreenDescription from './ScreenDescription'

describe('ScreenDescription', () => {
  it('should render children', () => {
    const { queryByText } = r(
      <ScreenDescription>description</ScreenDescription>
    )

    expect(queryByText('description')).toBeInTheDocument()
  })
})
