import React, { Fragment, useState, useCallback } from 'react'
import RadioField from '../RadioField/RadioField'
import SearchButtonBox from './SearchButtonBox'

const Search = ({ name, options, value, onSelect }) => {
  const [searchInputText, setSearchInputText] = useState('')
  const onChange = useCallback(e => {
    setSearchInputText(e.target.value)
  }, [])

  const filteredOptions = options.filter(
    o =>
      o.label.startsWith(searchInputText) || o.value.startsWith(searchInputText)
  )

  return (
    <Fragment>
      <RadioField
        name={name}
        options={filteredOptions}
        value={value}
        onChange={onSelect}
      />
      <SearchButtonBox value={searchInputText} onChange={onChange} />
    </Fragment>
  )
}

export default Search
