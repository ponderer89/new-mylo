import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import Button from '../../../components/Button/Button'

export const buttonHeight = '35px'

// ButtonBox also used by SingleInput
export const StyledButtonBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  height: ${p => p.theme.questionnaire.nextButtonHeight};
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 16px;
  background: rgba(240, 240, 240, 1);
`

const StyledButton = styled(Button)`
  height: ${buttonHeight};
  font-size: 1.1rem;
`

const NextButton = ({ className, toNextScreen }) => {
  return (
    <StyledButtonBox className={className} onClick={toNextScreen}>
      <StyledButton fullWidth>Next</StyledButton>
    </StyledButtonBox>
  )
}

const mapDispatch = ({ questionnaire }) => ({
  toNextScreen: () => questionnaire.changeScreen('next')
})

export default connect(
  null,
  mapDispatch
)(NextButton)
