import Vue from "vue";
import Vuex from "vuex";
import authenticationStore from "./authenticationStore";
import notificationStore from "./notificationStore";
import commonStore from "./commonStore";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: { authenticationStore, notificationStore, commonStore },
});
