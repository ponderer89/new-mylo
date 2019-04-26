import React from 'react'
import styled from 'styled-components/macro'
import { StyledButtonBox, buttonHeight } from '../NextButton/NextButton'

const StyledSingleInput = styled.div``

const StyledInputBox = styled(StyledButtonBox)`
  bottom: 68px;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 0;
    width: calc(100% - 32px);
    margin: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: ${buttonHeight};
  border: 0;
  padding: 0 8px;
`

const SingleInput = ({ className, value, onChange, placeholder }) => {
  return (
    <StyledSingleInput>
      <StyledInputBox className={className}>
        <StyledInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </StyledInputBox>
    </StyledSingleInput>
  )
}

export default SingleInput
