import React from 'react'
import styled from 'styled-components/macro'
import RadioItem from './RadioItem'

const StyledRadioField = styled.ul`
  height: 100%;
  margin-bottom: 60px;
`

const RadioField = ({ name, options, value, onChange }) => {
  return (
    <StyledRadioField>
      {options.map(opt => (
        <RadioItem
          key={opt.label}
          name={name}
          label={opt.label}
          value={opt.value}
          checked={value === opt.value}
          onChange={onChange}
        />
      ))}
    </StyledRadioField>
  )
}

export default RadioField
