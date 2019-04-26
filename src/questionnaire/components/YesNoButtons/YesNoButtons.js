import React from 'react'
import styled from 'styled-components/macro'
import { StyledButtonBox } from '../NextButton/NextButton'
import Button from '../../../components/Button/Button'

const StyledYesNoButtons = styled(StyledButtonBox)`
  height: 65px;
  width: calc(100% - 32px);
  z-index: 1;
`

const StyledYesNoButton = styled(Button)`
  height: 45px;
  width: 100%;
  font-size: 1.1em;
  margin-left: ${p => (p.left ? '0' : '8px')};
  margin-right: ${p => (p.right ? '0' : '8px')};
`

const YesNoButtons = ({ className, yesText, noText, onYes, onNo }) => {
  return (
    <div>
      <StyledYesNoButtons className={className}>
        <StyledYesNoButton onClick={onYes} left>
          {yesText}
        </StyledYesNoButton>

        <StyledYesNoButton onClick={onNo} right>
          {noText}
        </StyledYesNoButton>
      </StyledYesNoButtons>
    </div>
  )
}

export default YesNoButtons
