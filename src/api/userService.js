// import store from "../store";
import axios from "axios";
const serverUrl = "https://retify-deploy.herokuapp.com";

export async function getMyRecentlyPlayedTracks() {
    return axios(`${serverUrl}/api/spotify/me/recently-played`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getMySavedTracks() {
    return axios(`${serverUrl}/api/spotify/me/songs`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getMyData() {
    return axios(`${serverUrl}/api/spotify/me`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getMySongRate(songId) {
    return axios(`${serverUrl}/api/retify/my-rates/songs/${songId}`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getMyRates() {
    return axios(`${serverUrl}/api/retify/my-rates/songs`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}
