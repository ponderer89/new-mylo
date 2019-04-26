import React, { Fragment, useState, useCallback } from 'react'
import styled from 'styled-components/macro'
import Search from 'questionnaire/components/Search/Search'
import text from '../../../i18n/en-US.json'
import { constructOptions } from '../../../i18n/utils'
import NextButton from 'questionnaire/components/NextButton/NextButton.js'

const options = constructOptions({
  dictionary: text.questionnaire,
  path: 'fields.work_place.options'
})

const StyledNextButton = styled(NextButton)`
  z-index: 2;
`

const WorkPlaceSearch = () => {
  const [workPlace, setWorkPlace] = useState(null)
  const onSelect = useCallback(e => {
    setWorkPlace(e.target.value)
  }, [])

  return (
    <Fragment>
      <Search
        name="work_place"
        options={options}
        value={workPlace}
        onSelect={onSelect}
      />
      {workPlace !== null && <StyledNextButton />}
    </Fragment>
  )
}

export default WorkPlaceSearch
