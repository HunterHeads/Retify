import { getMyRecentlyPlayedTracks, getMySongRate } from "../../api";
import {
    showLoadingOverlay,
    hideLoadingOverlay,
} from "../../common/utils/utils";

export async function getSongsToRate() {
    showLoadingOverlay();
    const recentlyPlayedSongs = (await getMyRecentlyPlayedTracks()).items;
    if (!recentlyPlayedSongs) {
        hideLoadingOverlay();
        return;
    }
    const ratePromises = [];
    recentlyPlayedSongs.forEach((obj) => {
        ratePromises.push(getMySongRate(obj.track.id));
    });
    return await Promise.all(ratePromises).then((result) => {
        hideLoadingOverlay();
        return recentlyPlayedSongs
            .filter((song, index) => !result[index][0])
            .map((obj) => ({
                id: obj.track.id,
                title: obj.track.name,
                author: obj.track.artists[0].name,
                authorId: obj.track.artists[0].id,
                rate: 0,
            }));
    });
}

export async function getMyFriends() {
    return undefined;
}
