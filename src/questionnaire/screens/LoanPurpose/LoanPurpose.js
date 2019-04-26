import React, { useState, useCallback } from 'react'
import Screen from '../../components/Screen/Screen'
import RadioField from '../../components/RadioField/RadioField'
import text from '../../../i18n/en-US.json'
import { constructOptions } from '../../../i18n/utils'

const options = constructOptions({
  dictionary: text.questionnaire,
  path: 'fields.loan_purpose.options'
})

const LoanPurpose = () => {
  const [loanPurpose, setLoanPurpose] = useState(null)
  const onChange = useCallback(e => {
    setLoanPurpose(e.target.value)
  }, [])

  return (
    <Screen
      description="Defining the goal will help us costumize the loan to your personal needs"
      title="What do you need the money for?"
    >
      <RadioField
        name="loanPurpose"
        options={options}
        value={loanPurpose}
        onChange={onChange}
      />
    </Screen>
  )
}

export default LoanPurpose
