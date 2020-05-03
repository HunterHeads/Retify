const initialState = () => ({
  isLoading: false,
  backgroundColor: '#ebf6f7',
});

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload.isLoading;
    },
    setBackgroundColor(state, payload) {
      state.backgroundColor = payload.backgroundColor;
    },
  },
  actions: {
    showLoading({ commit }) {
      commit('setIsLoading', { isLoading: true });
    },
    hideLoading({ commit }) {
      commit('setIsLoading', { isLoading: false });
    },
    setBackgroundColor({ commit }, backgroundColor) {
      commit('setBackgroundColor', { backgroundColor });
    },
  },
};
