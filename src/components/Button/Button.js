import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  width: ${p => (p.fullWidth ? '100%' : 'auto')};
  padding: 0.3em 0.9em;
  background: ${p => p.theme.button.background[p.color] || p.color};
  color: ${p => p.theme.button.color[p.color] || p.color};
  border: 0;
  cursor: pointer;
`

const Button = ({ className, children, color, fullWidth, onClick }) => (
  <StyledButton
    className={className}
    color={color}
    fullWidth={fullWidth}
    onClick={onClick}
  >
    <span>{children}</span>
  </StyledButton>
)

Button.defaultProps = {
  color: 'main'
}

export default Button
