import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    newsItems: []
  },
  mutations: {
    newsLoaded(state, newsItems) {
      state.newsItems = newsItems;
    }
  },
  actions: {
    fetchData({ commit }) {
      axios.get(
        'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2d74fdc11ebd40a6b6488e5b34f0065c',
      ).then((response) => {
        const payload = response.data;
        console.log(payload['articles']);
        commit('newsLoaded', payload['articles']);
      }, (error) => {
        console.log(error);
      });
    }
  },
  modules: {
  }
})
