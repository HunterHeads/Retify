import { getMyRatedSongs } from "./BrowseSongsController";

export default {
    data: function() {
        return {
            title: "Przeglądaj piosenki",
            search: "",
            headers: [
                {
                    text: "Utwór",
                    align: "start",
                    sortable: true,
                    value: "title",
                },
                { text: "Wykonawca", value: "author" },
                { text: "Moja ocena", value: "rate" },
            ],
            songs: [],
        };
    },
    async created() {
        this.songs = await getMyRatedSongs();
    },
};
