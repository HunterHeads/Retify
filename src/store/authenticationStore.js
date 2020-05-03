const initialState = () => ({
    isLogged: false,
    username: "",
    isSpotify: false,
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
        setIsSpotify(state, payload) {
            state.isSpotify = payload.isSpotify;
        },
    },
    actions: {
        login({ commit }, { username, isSpotify }) {
            commit("setIsLogged", { isLogged: true });
            commit("setUsername", { username });
            commit("setIsSpotify", { isSpotify });
        },
        logout({ commit }) {
            commit("setIsLogged", { isLogged: false });
            commit("setUsername", { username: "" });
        },
    },
};
