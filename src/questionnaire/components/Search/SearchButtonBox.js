import React from 'react'
import styled from 'styled-components/macro'
import SingleInput from '../SingleInput/SingleInput'

const StyledSingleInput = styled(SingleInput)`
  bottom: 0;
`

const SearchButtonBox = ({ value, onChange }) => {
  return (
    <StyledSingleInput
      value={value}
      onChange={onChange}
      placeholder="Start typing company name"
    />
  )
}

export default SearchButtonBox
