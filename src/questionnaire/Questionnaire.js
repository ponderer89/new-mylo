import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { Formik } from 'formik'
import LoanPurpose from './screens/LoanPurpose/LoanPurpose'
import LoanPrincipal from './screens/LoanPrincipal/LoanPrincipal'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import BackButton from './components/BackButton/BackButton'
import MonthlyIncome from './screens/MonthlyIncome/MonthlyIncome'
import MonthlyInstallments from './screens/MonthlyInstallments/MonthlyInstallments'
import EmploymentStatus from './screens/EmploymentStatus/EmploymentStatus'
import WorkPlace from './screens/WorkPlace/WorkPlace'

const numberOfScreens = 10

const ScreensWrapper = styled.div`
  padding: 16px;
`

const TopWrapper = styled.div`
  padding: 16px 16px 0;
`

const StyledProgressBar = styled(ProgressBar)`
  position: relative;
  top: -1px; // used to overlay the progressbar on the TopNav's bottom border.
  height: 1px;
  width: 100%;
  margin: 0em auto 0;
`

const Questionnaire = ({ currentScreen }) => {
  return (
      <Formik>
    <div>

      <StyledProgressBar value={100 * (currentScreen / numberOfScreens)} />
      <TopWrapper>{currentScreen > 1 && <BackButton />}</TopWrapper>

      <ScreensWrapper>
        {currentScreen === 1 && <LoanPurpose />}
        {currentScreen === 2 && <LoanPrincipal />}
        {currentScreen === 3 && <MonthlyIncome />}
        {currentScreen === 4 && <MonthlyInstallments />}
        {currentScreen === 5 && <EmploymentStatus />}
        {currentScreen === 6 && <WorkPlace />}
      </ScreensWrapper>
    </div>
      </Formik>
  )
}

const mapState = ({ questionnaire }) => ({
  currentScreen: questionnaire.currentScreen
})

export default connect(mapState)(Questionnaire)
