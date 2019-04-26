import React, { useState, useCallback } from 'react'
import Screen from '../../components/Screen/Screen'
import RadioField from '../../components/RadioField/RadioField'
import text from '../../../i18n/en-US.json'
import { constructOptions } from '../../../i18n/utils'

const options = constructOptions({
  dictionary: text.questionnaire,
  path: 'fields.employment_status.options'
})

const EmploymentStatus = () => {
  const [employmentStatus, setemploymentStatus] = useState(null)
  const onSelect = useCallback(e => {
    setemploymentStatus(e.target.value)
  }, [])

  return (
    <Screen
      description="Knowing your employment status will help us find better loans for you."
      title="What is your employment status?"
    >
      <RadioField
        name="employmentStatus"
        options={options}
        value={employmentStatus}
        onChange={onSelect}
      />
    </Screen>
  )
}

export default EmploymentStatus
