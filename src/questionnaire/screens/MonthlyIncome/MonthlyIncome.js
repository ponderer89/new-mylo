import React from 'react'
import Screen from '../../components/Screen/Screen'
import SingleInput from '../../components/SingleInput/SingleInput'

const MonthlyIncome = () => {
  return (
    <Screen
      description="By knowing your monthly income we can look for more suitable loans for you"
      title="What is your monthly income?"
    >
      <SingleInput placeholder="Insert amount (5,000 - 50,000 NIS)" />
    </Screen>
  )
}

export default MonthlyIncome
