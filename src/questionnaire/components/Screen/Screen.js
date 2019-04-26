import React from 'react'
import styled from 'styled-components/macro'
import ScreenDescription from './ScreenDescription'
import ScreenTitle from './ScreenTitle'
import NextButton from '../NextButton/NextButton'
import YesNoButtons from '../YesNoButtons/YesNoButtons'

const StyledScreen = styled.div``

const Screen = ({
  children,
  description,
  title,
  showBinaryChoice = false,
  binaryChoiceProps,
  isSearch = false,
  SearchComponent
}) => {
  return (
    <StyledScreen>
      <ScreenDescription>{description}</ScreenDescription>
      <ScreenTitle>{title}</ScreenTitle>

      {children}
      {!showBinaryChoice && <NextButton />}
      {showBinaryChoice && <YesNoButtons {...binaryChoiceProps} />}
      {isSearch && <SearchComponent />}
    </StyledScreen>
  )
}

export default Screen
