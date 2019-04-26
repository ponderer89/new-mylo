import React from 'react'
import { r } from 'test-utils'
import RadioField from './RadioField'
import { fireEvent } from 'react-testing-library/dist'

const OPTIONS = [
  {
    label: 'Option',
    value: 'Option Value'
  }
]

describe('RadioField', () => {
  it('should render a list of options as radio inputs from prop', () => {
    const { queryByText } = r(
      <RadioField name="field" options={OPTIONS} onChange={jest.fn} />
    )

    expect(queryByText(OPTIONS[0].label)).toBeInTheDocument()
  })

  it('passes the "name" prop down to the children components', () => {
    const { container } = r(
      <RadioField name="field" options={OPTIONS} onChange={jest.fn} />
    )

    expect(container.querySelector('input[name="field"]')).toBeInTheDocument()
  })

  it('should determine if an item is checked by comparing the "value" prop to the item\'s value', () => {
    const { container } = r(
      <RadioField
        name="field"
        options={OPTIONS}
        value={OPTIONS[0].value}
        onChange={jest.fn}
      />
    )

    expect(container.querySelector('input[name="field"]').checked).toBe(true)
  })

  it('handles the change event of the rendered items', () => {
    const spy = jest.fn()
    const { container } = r(
      <RadioField name="field" options={OPTIONS} onChange={spy} />
    )

    fireEvent.click(container.querySelector('input[name="field"]'))

    expect(spy).toHaveBeenCalled()
  })
})
