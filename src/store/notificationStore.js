import { NotificationType } from "../enums";

const initialState = () => ({
    message: "",
    type: "",
    isVisible: false,
    timeoutId: null,
});

export default {
    namespaced: true,
    state: initialState(),
    mutations: {
        setMessage(state, payload) {
            state.message = payload.message;
        },
        setType(state, payload) {
            if (Object.values(NotificationType).indexOf(payload.type) === -1) {
                state.type = NotificationType.INFO;
            } else {
                state.type = payload.type;
            }
        },
        hideNotification(state) {
            state.isVisible = false;
        },
        showNotification(state) {
            state.isVisible = true;
        },
        setTimeoutId(state, payload) {
            state.timeoutId = payload.timeoutId;
        },
        clearTimeout(state) {
            clearTimeout(state.timeoutId);
            state.timeoutId = null;
        },
    },
    actions: {
        showNotification({ commit }, { message, type }) {
            // commit("clearTimeout");
            commit("setMessage", { message });
            commit("setType", { type });
            commit("showNotification");
            setTimeout(() => commit("hideNotification"), 5000);
            // commit("setTimeoutId", { timeoutId });
        },
    },
};
