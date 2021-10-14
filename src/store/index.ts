import { createStore } from 'vuex'
import axios from 'axios'
import News from '@/types/News';
import NewsState from '@/types/NewsState';

const state: NewsState = {
  items: []
};

export default createStore({
  state: state,
  mutations: {
    newsLoaded(state: NewsState, items: News[]) {
      state.items = items;
    }
  },
  actions: {
    fetchData({ commit }) {
      axios.get(
        'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2d74fdc11ebd40a6b6488e5b34f0065c',
      ).then((response) => {
        const payload = response.data;
        commit('newsLoaded', payload['articles']);
      }, (error) => {
        console.log(error);
      });
    }
  },
  modules: {
  }
})
