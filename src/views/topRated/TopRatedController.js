import { getTopRatedSongs, getSongData } from "../../api";
import {
    hideLoadingOverlay,
    showLoadingOverlay,
} from "../../common/utils/utils";

export async function getTop50Songs() {
    showLoadingOverlay();
    const bestSongs = await getTopRatedSongs();
    const songPromises = [];
    bestSongs.forEach((obj) => songPromises.push(getSongData(obj.songId)));
    return await Promise.all(songPromises).then((result) => {
        hideLoadingOverlay();
        return result
            .filter((obj) => obj.id)
            .map((obj, index) => {
                return {
                    title: obj.name,
                    author: obj.artists[0].name,
                    songId: obj.id,
                    rate: bestSongs[index].rate,
                    count: bestSongs[index].count,
                };
            });
    });
}
