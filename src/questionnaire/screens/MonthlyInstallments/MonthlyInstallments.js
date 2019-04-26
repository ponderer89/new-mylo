import React, { useState } from 'react'
import { connect } from 'react-redux'
import Screen from '../../components/Screen/Screen'
import SingleInput from '../../components/SingleInput/SingleInput'

const MonthlyInstallments = ({ toNextScreen }) => {
  const [hasDebtsOrMortgages, setHasDebtsOrMortgages] = useState(false)

  return (
    <Screen
      description="Your financial status will effect your loan rates"
      title="Do you have any debts or mortgages?"
      showBinaryChoice={!hasDebtsOrMortgages}
      binaryChoiceProps={{
        yesText: 'Yes',
        noText: 'No',
        onYes: () => setHasDebtsOrMortgages(true),
        onNo: () => toNextScreen()
      }}
    >
      {hasDebtsOrMortgages && <SingleInput placeholder="Insert amount" />}
    </Screen>
  )
}

const mapDispatch = ({ questionnaire }) => ({
  toNextScreen: () => questionnaire.changeScreen('next')
})

export default connect(
  null,
  mapDispatch
)(MonthlyInstallments)
