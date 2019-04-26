export const i18n = {
  state: {
    currentLanguage: 'en-US',
    dictionary: {}
  },
  reducers: {
    setLanguage(state, payload) {
      state.currentLanguage = payload
    },
    setDictionary(state, payload) {
      state.dictionary = payload
    }
  },
  effects: dispatch => ({
    changeLanguage(payload, rootState) {
      if (rootState.i18n.currentLanguage !== payload) {
        this.setLanguage(payload)
        this.getDictionary()
      }
    },
    getDictionary(_, rootState) {
      import(`../../i18n/${rootState.i18n.currentLanguage}.json`).then(o => {
        this.setDictionary(o.default)
      })
    }
  })
}
