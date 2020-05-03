import { MoreButton } from "../../../../components";
import RateSong from "../rateSongItem/RateSong.vue";
export default {
    components: {
        RateSong,
        MoreButton,
    },
    props: {
        songs: Array,
        onMoreSongs: Function,
    },
    data: function() {
        return {
            titles: {
                more: "Zobacz więcej",
            },
        };
    },
};
