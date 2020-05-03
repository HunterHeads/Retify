import { getCurrentUsername } from "../../../common/utils/utils";
import { mapState } from "vuex";
export default {
    data() {
        return {
            drawer: true,
            items: [],
            color: "primary",
            colors: ["primary", "blue", "success", "red", "teal"],
            right: false,
            miniVariant: true,
            expandOnHover: false,
            background: true,
            username: null,
            printables: {
                LOGIN_WITH_SPOTIFY: "Zaloguj do Spotify"
            }
        };
    },
    computed: {
        ...mapState("authenticationStore", ["isSpotify"]),
        bg() {
            return this.background
                ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                : "";
        },
    },
    beforeMount() {
        this.items = [
            {
                title: "Strona główna",
                icon: "$vuetify.icons.dash",
                to: "/dashboard",
            },
            {
                title: "Najlepsze",
                icon: "$vuetify.icons.star",
                to: "/top-rated",
            },
            {
                title: "Ocenione",
                icon: "$vuetify.icons.music",
                to: "/browse-songs",
            },
            {
                title: "Słuchaj",
                icon: "$vuetify.icons.play",
                to: "/play",
            },
            {
                title: "Ustawienia",
                icon: "$vuetify.icons.prefs",
                to: "/settings",
            },
            {
                title: "Zaloguj ze Spotify",
                icon: "$vuetify.icons.login",
                to: "/login-with-spotify",
                isHidden: this.isSpotify,
            },
            {
                title: "Wyloguj się",
                icon: "$vuetify.icons.logout",
                to: "/logout",
            },
        ];
        this.username = getCurrentUsername();
    },
};
