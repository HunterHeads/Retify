import Vue from "vue";
import Vuex from "vuex";
import authenticationStore from "./authenticationStore";
import notificationStore from "./notificationStore";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { authenticationStore, notificationStore },
});
