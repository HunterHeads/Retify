const initialState = () => ({
    isLogged: false,
    username: "",
});

export default {
    namespaced: true,
    state: initialState(),
    mutations: {
        setIsLogged(state, payload) {
            state.isLogged = payload.isLogged;
        },
        setUsername(state, payload) {
            state.username = payload.username;
        },
    },
    actions: {
        login({ commit }, username) {
            commit("setIsLogged", { isLogged: true });
            commit("setUsername", { username });
        },
        logout({ commit }) {
            commit("setIsLogged", { isLogged: false });
            commit("setUsername", { username: "" });
        },
    },
};
