/* eslint-disable no-unused-vars */
import axios from "axios";
const serverUrl = "https://retify-deploy.herokuapp.com";

export async function getAlbumSongs(id) {
    return axios(`${serverUrl}/api/spotify/albums/${id}/songs`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getArtistData(id) {
    return axios(`${serverUrl}/api/spotify/artists/${id}`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getSongData(id) {
    return axios(`${serverUrl}/api/spotify/songs/${id}`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function rateSong(songId, rate) {
    return axios(`${serverUrl}/api/retify/rate/song`, {
        method: "PUT",
        data: { songId, rate },
        withCredentials: true,
    }).then((response) => {
        return response.data;
        // log(response);
    });
}

export async function getSongRate(songId) {
    return axios(`${serverUrl}/api/retify/rate/songs/${songId}`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function rateArtist(artistId, rate) {
    return axios(`${serverUrl}/api/retify/rate/artist`, {
        method: "PUT",
        data: { artistId, rate },
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getArtistRate(artistId) {
    return axios(`${serverUrl}/api/retify/rate/artist/${artistId}`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}

export async function getTopRatedSongs() {
    return axios(`${serverUrl}/api/retify/top/songs`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return response.data;
    });
}
