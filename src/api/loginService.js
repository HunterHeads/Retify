import store from "../store";
import router from "../router";
import axios from "axios";
const serverUrl = "http://localhost:8000";
import { NotificationType } from "../enums/NotificationTypeEnum";
import { showNotification } from "../common/utils/utils";

export async function register(username, password) {
    axios(`${serverUrl}/api/retify/register`, {
        method: "POST",
        data: { username, password },
        withCredentials: true,
    }).then((response) => {
        if (response.status !== 200) {
            showNotification(response.data, NotificationType.ERROR);
            return;
        }
        store.dispatch("authenticationStore/login");
        router.push("dashboard").catch((err) => {
            console.log(err);
        });
        showNotification("You succesfully signed up", NotificationType.SUCCESS);
    });
}

export async function login(username, password) {
    axios(`${serverUrl}/api/retify/login`, {
        method: "POST",
        data: { username, password },
        withCredentials: true,
    }).then((response) => {
        if (response.status !== 200) {
            showNotification(response.data, NotificationType.ERROR);
            return;
        }
        store.dispatch("authenticationStore/login", username);
        router.push("dashboard").catch((err) => {
            console.log(err);
        });
        showNotification("You succesfully logged in", NotificationType.SUCCESS);
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
        router.push("login").catch((err) => {
            console.log(err);
        });
        showNotification(
            "You succesfully logged out",
            NotificationType.SUCCESS
        );
    });
}
