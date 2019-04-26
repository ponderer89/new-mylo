import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { FiChevronLeft } from 'react-icons/fi'

const StyledBackButton = styled.div`
  position: relative;
  left: -5px;
  display: flex;
  align-items: center;
  line-height: 0;
  margin: 12px 0 0;
  & span {
    font-size: 0.95em;
  }
`

const BackButton = ({ toPrevScreen }) => {
  return (
    <StyledBackButton onClick={toPrevScreen}>
      <FiChevronLeft size="1.2em" />
      <span>Back</span>
    </StyledBackButton>
  )
}

const mapDispatch = ({ questionnaire }) => ({
  toPrevScreen: () => questionnaire.changeScreen('prev')
})

export default connect(
  null,
  mapDispatch
)(BackButton)
