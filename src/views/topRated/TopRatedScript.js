import { Card, MoreButton } from '../../components';
import { topSongs, topArtists } from './mockData';
import TopSongList from './topSongList/TopSongList.vue';
import TopArtistList from './topArtistList/TopArtistList.vue';

export default {
  data: function() {
    return {
      topSongs,
      topArtists,
      titles: {
        topSongs: 'Top 50 piosenek',
        topArtists: 'Top 50 artystów',
      },
    };
  },
  computed: {},
  methods: {},
  components: {
    Card,
    MoreButton,
    TopSongList,
    TopArtistList,
  },
};
