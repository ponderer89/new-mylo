import React from 'react'
import styled from 'styled-components/macro'

const StyledProgressBar = styled.div`
  height: 12px;
  width: 100%;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.05);
  margin: 0 auto;
`

const StyledFiller = styled.div`
  height: 100%;
  width: ${p => p.value}%;
  background: ${p => p.color};
  border-radius: inherit;
  transition: width 0.25s ease-in;
`

const ProgressBar = ({ className, color, value }) => {
  return (
    <StyledProgressBar className={className}>
      <StyledFiller color={color} value={value} />
    </StyledProgressBar>
  )
}

ProgressBar.defaultProps = {
  value: 0,
  color: 'blue'
}

export default ProgressBar
