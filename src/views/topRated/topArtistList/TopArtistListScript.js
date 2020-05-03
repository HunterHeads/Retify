import TopArtistItem from '../topArtist/TopArtistItem.vue';
import MoreButton from '../../../components/ui/moreButton/MoreButton.vue';

export default {
  props: {
    artists: Array,
  },
  data() {
    return {
      titles: {
        more: 'Zobacz więcej',
      },
    };
  },
  components: {
    TopArtistItem,
    MoreButton,
  },
  methods: {
    onArtistClick() {
      //todo implement
    },
  },
};
