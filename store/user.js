export const state = () => ({
  bitcoins: 0,
  bitcoinHistory: [0],
})

export const mutations = {
  INIT_BITCOINS(state) {
    state.bitcoins = parseFloat(localStorage.getItem('user.bitcoins')) || 0
    state.bitcoinHistory = JSON.parse(
      localStorage.getItem('user.bitcoinHistory') || '[0]'
    )
  },

  SET_BITCOINS(state, bitcoins) {
    localStorage.setItem('user.bitcoins', bitcoins)

    state.bitcoins = bitcoins
    state.bitcoinHistory.push(state.bitcoins)

    if (state.bitcoinHistory.length > 10) {
      state.bitcoinHistory.shift()
    }

    localStorage.setItem(
      'user.bitcoinHistory',
      JSON.stringify(state.bitcoinHistory)
    )
  },

  UPDATE_BITCOINS(state, bitcoins) {
    const currentBitcoins =
      parseFloat(localStorage.getItem('user.bitcoins')) || 0
    this.commit('user/SET_BITCOINS', currentBitcoins + bitcoins)
  },

  SET_BITCOINS_BY_CURRENCY(state, { course, amount }) {
    /**
     * Example: 1 bitcoin costs 10000 EUR
     * The user has set the currency and amount to EUR, 15000
     * 15000 / 10000 will result in having 1.5 bitcoins.
     */
    this.commit('user/SET_BITCOINS', amount / course)
  },

  UPDATE_BITCOINS_BY_CURRENCY(state, { course, amount }) {
    const currentBitcoins =
      parseFloat(localStorage.getItem('user.bitcoins')) || 0

    this.commit('user/SET_BITCOINS', currentBitcoins + amount / course)
  },
}

export const actions = {
  initBitcoins({ commit }) {
    commit('INIT_BITCOINS')
  },

  setBitcoins({ commit }, bitcoins) {
    commit('SET_BITCOINS', bitcoins)
  },

  updateBitcoins({ commit }, bitcoins) {
    commit('UPDATE_BITCOINS', bitcoins)
  },

  async setBitcoinsByCurrency({ commit }, { currency, amount }) {
    let currencyCourse = 1
    // BC = Bitcoin
    if (currency !== 'BC') {
      const ticker = await this.$axios.$get('https://blockchain.info/ticker')
      currencyCourse = ticker[currency].buy
    }
    commit('SET_BITCOINS_BY_CURRENCY', { course: currencyCourse, amount })
  },

  async updateBitcoinsByCurrency({ commit }, { currency, amount }) {
    let currencyCourse = 1
    // BC = Bitcoin
    if (currency !== 'BC') {
      const ticker = await this.$axios.$get('https://blockchain.info/ticker')
      currencyCourse = ticker[currency].buy
    }

    commit('UPDATE_BITCOINS_BY_CURRENCY', { course: currencyCourse, amount })
  },
}
