import React from 'react'
import { r } from 'test-utils'
import Screen from './Screen'

describe('Screen', () => {
  it('renders description from prop', () => {
    const { queryByText } = r(<Screen description="description" />)

    expect(queryByText('description')).toBeInTheDocument()
  })

  it('renders title from prop', () => {
    const { queryByText } = r(<Screen title="title" />)

    expect(queryByText('title')).toBeInTheDocument()
  })

  it('should render children', () => {
    const { queryByText } = r(
      <Screen>
        <div>children</div>
      </Screen>
    )

    expect(queryByText('children')).toBeInTheDocument()
  })

  it('should show "Next" button by default', () => {
    const { queryByText } = r(<Screen />)

    expect(queryByText('Next')).toBeInTheDocument()
  })

  it('should hide "Next" button and show binary choice instead', () => {
    const { queryByText } = r(
      <Screen showBinaryChoice binaryChoiceProps={{ yesText: 'Yes' }} />
    )

    expect(queryByText('Next')).not.toBeInTheDocument()
    expect(queryByText('Yes')).toBeInTheDocument()
  })

  it('should show Search component', () => {
    const SearchComponent = () => <div>search</div>
    const { queryByText } = r(
      <Screen isSearch SearchComponent={SearchComponent} />
    )

    expect(queryByText('search')).toBeInTheDocument()
  })
})
