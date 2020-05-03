import { rateSong } from "../../../../api";
export default {
    props: {
        song: Object,
    },
    data() {
        return {
            rate: null,
        };
    },
    async created() {
        // const rate = await getSongRate(this.song.id)
        // if(rate)
    },
    methods: {
        async onRate(rate) {
            rateSong(this.song.id, rate);
        },

        async onAuthorClick() {
            window.open(
                `https://open.spotify.com/artist/${this.song.authorId}`
            );
        },
        async onTitleClick() {
            window.open(`https://open.spotify.com/track/${this.song.id}`);
        },
    },
};
