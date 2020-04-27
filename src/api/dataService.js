import axios from "axios";
const serverUrl = "http://localhost:8000";

export async function getAlbumTracks(id) {
    axios(`${serverUrl}/api/spotify/album/${id}/tracks`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        console.log(response.data);
    });
}

export async function rateSong(songId, rate) {
    axios(`${serverUrl}/api/retify/rate/song`, {
        method: "PUT",
        data: { songId, rate },
        withCredentials: true,
    }).then((response) => {
        console.log(response);
    });
}

export async function getSongRate(songId) {
    return axios(`${serverUrl}/api/retify/rate/song/${songId}`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return console.log(response);
    });
}

export async function rateArtist(artistId, rate) {
    axios(`${serverUrl}/api/retify/rate/artist`, {
        method: "PUT",
        data: { artistId, rate },
        withCredentials: true,
    }).then((response) => {
        console.log(response);
    });
}

export async function getArtistRate(artistId) {
    return axios(`${serverUrl}/api/retify/rate/artist/${artistId}`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        return console.log(response);
    });
}
