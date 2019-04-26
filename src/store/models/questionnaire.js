// import API from 'globals/API'

export const questionnaire = {
  state: {
    currentScreen: 6,
    isUserValidated: false,
    selectedOffer: {
      supplier: ''
    },
    offers: {
      request_id: null,
      offers: null
    }
  },
  reducers: {
    changeScreen(state, screen) {
      if (screen === 'next') {
        state.currentScreen = state.currentScreen + 1
      } else if (screen === 'prev') {
        state.currentScreen = state.currentScreen - 1
      } else {
        state.currentScreen = screen
      }
    },
    toggleLoanPurposeModal(state) {
      state.loanPurposeModalOpen = !state.loanPurposeModalOpen
    },
    toggleCheckPension(state) {
      state.checkPension = !state.checkPension
    },
    toggleTermsAgreement(state) {
      state.termsAgreement = !state.termsAgreement
    },
    toggleContactModal(state) {
      state.isContactModalOpen = !state.isContactModalOpen
    },
    setUserValidated(state, payload) {
      state.isUserValidated = payload
    },
    setOffers(state, payload) {
      state.offers = payload
    },
    selectOffer(state, payload) {
      state.selectedOffer = payload
    }
  },
  effects: dispatch => ({
    getOffers(data, rootState) {
      if (rootState.questionnaire.currentStep < 12) {
        const { request_id } = rootState.questionnaire.offers

        let request
        if (!request_id) {
          request = QuestionnaireAPI._post({
            endpoint: 'loans/offer/request/',
            data
          })
        } else {
          request = QuestionnaireAPI._patch({
            endpoint: `loans/offer/request/${request_id}/`,
            data
          })
        }

        request.then(res => {
          if (res) {
            this.setOffers(res.data)
            localStorage.setItem(
              'offers',
              JSON.stringify({ ...res.data, request_id })
            )
          }
        })
      }
    },
    validateUser(payload, rootState) {
      const { request_id } = rootState.questionnaire.offers

      QuestionnaireAPI._post({
        endpoint: `loans/verification/first/`,
        data: {
          ...payload.data,
          request_id
        }
      })
        .then(res => {
          if (res) {
            this.setOffers({ ...res.data, request_id })
            this.setUserValidated(true)
          }
        })
        .catch(() => {
          payload.callback()
        })
    }
  })
}

const QuestionnaireAPI = {}

// new API({
//   baseUrl: 'http://mylo.eu-central-1.elasticbeanstalk.com/'
// })
