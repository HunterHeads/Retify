import store from "../../store";

export function showNotification(message, type) {
    store.dispatch("notificationStore/showNotification", {
        message,
        type,
    });
}

export function getCurrentUsername() {
    return store.state.authenticationStore.username;
}
