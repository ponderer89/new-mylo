import React, { useState } from 'react'
import { connect } from 'react-redux'
import Screen from '../../components/Screen/Screen'
import WorkPlaceSearch from './WorkPlaceSearch'

const WorkPlace = ({ toNextScreen }) => {
  const [hasWorkPlace, setHasWorkPlace] = useState(false)

  return (
    <Screen
      description={
        !hasWorkPlace
          ? 'Large organizations often offer special loans for their employees'
          : ''
      }
      title={
        !hasWorkPlace
          ? 'Do you work for an organization with more than 500 employees?'
          : 'Who do you work for?'
      }
      showBinaryChoice={!hasWorkPlace}
      binaryChoiceProps={{
        yesText: 'Yes',
        noText: 'No',
        onYes: () => setHasWorkPlace(true),
        onNo: toNextScreen
      }}
      isSearch={hasWorkPlace}
      SearchComponent={WorkPlaceSearch}
    />
  )
}

const mapDispatch = ({ questionnaire }) => ({
  toNextScreen: () => questionnaire.changeScreen('next')
})

export default connect(
  null,
  mapDispatch
)(WorkPlace)
