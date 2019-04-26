import React from 'react'
import { r } from 'test-utils'
import Search from './Search'
import { fireEvent } from 'react-testing-library'

const OPTIONS = [
  {
    label: 'label',
    value: 'value'
  }
]

describe('Search', () => {
  it('should render', () => {
    const { container } = r(
      <Search name="name" value="value" options={OPTIONS} onSelect={jest.fn} />
    )

    expect(container).toMatchSnapshot()
  })

  it('should filter the options when using the search input', () => {
    const _OPTIONS = [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }]

    const { container, queryByText } = r(
      <Search name="name" value="value" options={_OPTIONS} onSelect={jest.fn} />
    )

    fireEvent.change(container.querySelectorAll('input')[2], {
      target: { value: 'B' }
    })

    expect(queryByText('A')).not.toBeInTheDocument()
  })
})
