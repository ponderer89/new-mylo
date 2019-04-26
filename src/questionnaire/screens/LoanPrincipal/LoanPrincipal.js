import React from 'react'
import Screen from '../../components/Screen/Screen'
import SingleInput from '../../components/SingleInput/SingleInput'

const LoanPurpose = () => {
  return (
    <Screen
      description="Hi! I'm Hadar, i'll be helping you get the best loan for you."
      title="How much money do you need?"
    >
      <SingleInput placeholder="Insert amount (5,000 - 50,000 NIS)" />
    </Screen>
  )
}

export default LoanPurpose
