import FriendList from "./components/friendList/FriendList.vue";
import RateSongList from "./components/rateSongList/RateSongList.vue";
import { Card, MoreButton } from "../../components";
import friends from "./mockData";
import { getSongsToRate } from "./DashboardController";
export default {
    components: {
        FriendList,
        RateSongList,
        Card,
        MoreButton,
    },
    data: function() {
        return {
            titles: {
                friends: "Przyjaciele",
                rateSongs: "Oceń piosenki",
                more: "Zobacz więcej",
            },
            friends,
            songs: [],
            avatar: true,
            flat: true,
            twoLine: true,
            musicNote: "♫ ",
            moreTitle: "Zobacz więcej",
            moreIcon: "$vuetify.icons.more",
        };
    },
    computed: {
        last3Friends: function() {
            return this.friends.slice(0, 3);
        },
    },
    async created() {
        this.songs = await getSongsToRate();
    },
    methods: {
        onMoreFriends: () => {},
        onMoreSongs: () => {},
        onSongRated: () => {},
        onFriend: () => {},
    },
};
