import TopSongItem from "../topSong/TopSongItem.vue";
import MoreButton from "../../../components/ui/moreButton/MoreButton.vue";

export default {
    props: {
        songs: Array,
    },
    data() {
        return {
            titles: {
                more: "Zobacz więcej",
            },
        };
    },
    components: {
        TopSongItem,
        MoreButton,
    },
    methods: {
        onMoreButtonClick() {},
    },
};
