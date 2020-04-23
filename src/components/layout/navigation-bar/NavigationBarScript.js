import { loginWithSpotify } from "../../../api/loginService";
import { getMyRecentlyPlayedTracks, getMyData } from "../../../api/userService";
export default {
    data() {
        return {
            drawer: true,
            items: [
                {
                    title: "Strona główna",
                    icon: "$vuetify.icons.dash",
                    to: "/dashboard",
                },
                { title: "Najlepsze", icon: "$vuetify.icons.star", to: "/top" },
                {
                    title: "Artyści",
                    icon: "$vuetify.icons.artist",
                    to: "/artists",
                },
                {
                    title: "Piosenki",
                    icon: "$vuetify.icons.music",
                    to: "/songs",
                },
                {
                    title: "Słuchaj",
                    icon: "$vuetify.icons.play",
                    to: "/playMusic",
                },
                {
                    title: "Ustawienia",
                    icon: "$vuetify.icons.prefs",
                    to: "/settings",
                },
                {
                    title: "Wyloguj się",
                    icon: "$vuetify.icons.logout",
                    to: "/logout",
                },
            ],
            color: "primary",
            colors: ["primary", "blue", "success", "red", "teal"],
            right: false,
            miniVariant: true,
            expandOnHover: false,
            background: true,
        };
    },
    computed: {
        bg() {
            return this.background
                ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                : undefined;
        },
    },
    methods: {
        loginWithSpotify() {
            loginWithSpotify();
        },
        getMyRecentlyPlayedTracks() {
            getMyRecentlyPlayedTracks("5U4W9E5WsYb2jUQWePT8Xm");
        },
        getMyData() {
            getMyData();
        },
    },
};
