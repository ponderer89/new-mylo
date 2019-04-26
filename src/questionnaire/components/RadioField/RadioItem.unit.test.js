import React from 'react'
import { r } from 'test-utils'
import { fireEvent } from 'react-testing-library'
import RadioItem from './RadioItem'

describe('RadioItem', () => {
  it('should render a radio input element', () => {
    const { container } = r(<RadioItem name="name" value="value" />)

    expect(container.querySelector('input[name="name"]')).toBeInTheDocument()
    expect(container.querySelector('input[value="value"]')).toBeInTheDocument()
  })

  it('should render a label', () => {
    const { queryByText } = r(<RadioItem label="label" />)

    expect(queryByText('label')).toBeInTheDocument()
  })

  it('should handle change event', () => {
    const spy = jest.fn()
    const { container } = r(
      <RadioItem name="name" value="value" onChange={spy} checked />
    )

    fireEvent.click(container.querySelector('input[name="name"]'))

    expect(spy).toHaveBeenCalled()
  })

  it('should be rendered as checked', () => {
    const { container } = r(
      <RadioItem name="name" value="value" onChange={jest.fn} checked />
    )

    expect(container.querySelector('input[name="name"]').checked).toBe(true)
  })

  it('should uncheck item', () => {
    let value = '1'
    const onChange = jest.fn(e => (value = e.target.value))
    const { rerender, container } = r(
      <RadioItem
        name="name"
        value="1"
        onChange={onChange}
        checked={value === '1'}
      />
    )

    fireEvent.click(container.querySelector('input[name="name"]'))

    rerender(
      <RadioItem
        name="name"
        value="1"
        onChange={jest.fn}
        checked={value === '1'}
      />
    )

    expect(container.querySelector('input[name="name"]').checked).toBe(false)
  })
})
