import React from 'react'
import styled from 'styled-components/macro'

const StyledRadioItem = styled.li`
  margin-bottom: 6px;

  input[type='radio'] {
    vertical-align: middle;
    position: relative;
    bottom: 1px;
  }

  label {
    margin-${p => (p.theme.direction === 'ltr' ? 'left' : 'right')}: 3px;
  }
`

const RadioItem = ({ name, label, value, checked, onChange }) => {
  return (
    <StyledRadioItem>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onClick={() => {
          if (checked) {
            onChange({ target: { value: null } })
          }
        }}
      />
      <label>{label}</label>
    </StyledRadioItem>
  )
}

export default RadioItem
