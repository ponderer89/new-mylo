import React from 'react'
import { FiMenu } from 'react-icons/fi'
import styled from 'styled-components/macro'

const menuIconSize = '1.3em'

const StyledTopNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const StyledMenuIcon = styled.div`
  height: ${menuIconSize};
  padding: 0 14px;
`

const TopNav = () => {
  return (
    <StyledTopNav>
      <StyledMenuIcon>
        <FiMenu size={menuIconSize} />
      </StyledMenuIcon>
    </StyledTopNav>
  )
}

export default TopNav
