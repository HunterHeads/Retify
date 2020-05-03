import store from "../../store";

export function showNotification(message, type) {
    store.dispatch("notificationStore/showNotification", {
        message,
        type,
    });
}

export function showLoadingOverlay() {
    // store.dispatch("commonStore/showLoading");
}

export function hideLoadingOverlay() {
    store.dispatch("commonStore/hideLoading");
}

export function getCurrentUsername() {
    return store.state.authenticationStore.username;
}
