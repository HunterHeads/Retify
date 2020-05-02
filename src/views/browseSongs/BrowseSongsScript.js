import songs from './mockData';

export default {
  data: function() {
    return {
      title: 'Przeglądaj piosenki',
      search: '',
      headers: [
        {
          text: 'Utwór',
          align: 'start',
          sortable: true,
          value: 'title',
        },
        { text: 'Wykonawca', value: 'artist' },
        { text: 'Ilość ocen', value: 'ratesCount' },
        { text: 'Średnia ocena', value: 'average' },
      ],
      songs: songs,
    };
  },
};
