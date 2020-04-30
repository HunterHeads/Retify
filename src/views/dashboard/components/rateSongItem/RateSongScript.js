import { rateSong, getArtistData } from "../../../../api";
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
            console.log(await getArtistData("06HL4z0CvFAxyc27GXpf02"));
            rateSong(this.song.id, rate);
            // console.log(song);
        },
    },
};
