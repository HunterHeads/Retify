export default {
    props: {
        topSong: Object,
    },
    data() {
        return {};
    },
    computed: {
        ratesCountPrintable() {
            return `ilość ocen: ${this.topSong.count}`;
        },
    },
    methods: {
        onClick() {
            //todo implement
        },
    },
};
