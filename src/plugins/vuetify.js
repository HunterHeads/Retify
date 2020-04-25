import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      dash: 'mdi-view-dashboard',
      star: 'mdi-star',
      artist: 'mdi-artist',
      music: 'mdi-music',
      play: 'mdi-play',
      prefs: 'mdi-settings',
      logout: 'mdi-location-exit',
      more: 'mdi-more',
      song: 'mdi-music-circle',
      account: 'mdi-account-circle',
    },
  },
});
