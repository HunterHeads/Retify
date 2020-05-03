import { getMyRates, getSongData } from "../../api";

export async function getMyRatedSongs() {
    const myRates = await getMyRates();
    const songPromises = [];
    myRates.forEach((obj) => songPromises.push(getSongData(obj.songId)));
    return await Promise.all(songPromises).then((result) => {
        return result.map((obj, index) => ({
            title: obj.name,
            author: obj.artists[0].name,
            songId: obj.id,
            rate: myRates[index].rate,
        }));
    });
}
