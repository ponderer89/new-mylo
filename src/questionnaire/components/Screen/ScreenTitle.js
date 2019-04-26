import React from 'react'
import styled from 'styled-components/macro'

const StyledScreenTitle = styled.h1``

const ScreenTitle = ({ children }) => {
  return <StyledScreenTitle>{children}</StyledScreenTitle>
}

export default ScreenTitle
