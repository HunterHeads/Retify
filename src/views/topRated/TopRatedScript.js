import { Card, MoreButton } from "../../components";
import TopSongList from "./topSongList/TopSongList.vue";
import TopArtistList from "./topArtistList/TopArtistList.vue";
import { getTop50Songs } from "./TopRatedController";

export default {
    components: {
        Card,
        MoreButton,
        TopSongList,
        TopArtistList,
    },
    data: function() {
        return {
            topSongs: [],
            titles: {
                topSongs: "Top 50 piosenek",
                topArtists: "Top 50 artystów",
            },
        };
    },
    async created() {
        this.topSongs = await getTop50Songs();
    },
    computed: {},
    methods: {},
};
