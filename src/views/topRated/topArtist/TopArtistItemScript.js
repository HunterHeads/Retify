export default {
  props: {
    artist: Object,
  },
  data() {
    return {};
  },
  computed: {
    ratesCountPrintable() {
      return `ilość ocen: ${this.artist.ratesCount}`;
    },
  },
  methods: {
    onClick() {
      //todo click
    }
  }
};
