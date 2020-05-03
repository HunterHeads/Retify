import store from "../store";
import router from "../router";
import axios from "axios";
const serverUrl = "https://retify-deploy.herokuapp.com";
import { NotificationType } from "../enums";
import {
    showNotification,
    showLoadingOverlay,
    hideLoadingOverlay,
} from "../common/utils/utils";

//TODO: create API class
export async function register(username, password) {
    showLoadingOverlay();
    axios(`${serverUrl}/api/retify/register`, {
        method: "POST",
        data: { username, password },
        withCredentials: true,
    })
        .then((response) => {
            if (response.status !== 201) {
                showNotification(response.data, NotificationType.ERROR);
                return;
            }
            store.dispatch("authenticationStore/login", { username });
            router.push("dashboard").catch(() => {});
            showNotification(
                "You successfully signed up",
                NotificationType.SUCCESS
            );
        })
        .catch((err) => {
            showNotification(err.response.data, NotificationType.ERROR);
            return;
        })
        .finally(() => {
            hideLoadingOverlay();
        });
}

export async function login(username, password) {
    showLoadingOverlay();
    axios(`${serverUrl}/api/retify/login`, {
        method: "POST",
        data: { username, password },
        withCredentials: true,
    })
        .then((response) => {
            if (response.status !== 200) {
                showNotification(response.data, NotificationType.ERROR);
                return;
            }
            store.dispatch("authenticationStore/login", { username });
            router.push("dashboard").catch(() => {});
            showNotification(
                "You successfully logged in",
                NotificationType.SUCCESS
            );
        })
        .catch((err) => {
            showNotification(err.response.data, NotificationType.ERROR);
            return;
        })
        .finally(() => {
            hideLoadingOverlay();
        });
}

export async function loginWithSpotify() {
    window.location.href = `${serverUrl}/api/spotify/login`;
}

export async function logout() {
    axios(`${serverUrl}/api/retify/logout`, {
        method: "GET",
        withCredentials: true,
    }).then(() => {
        store.dispatch("authenticationStore/logout");
        router.push("login").catch(() => {});
        showNotification(
            "You successfully logged out",
            NotificationType.SUCCESS
        );
    });
}
