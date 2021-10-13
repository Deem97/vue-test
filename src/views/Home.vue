<template>
  <div class="home">
    <news-list :newsItems="loading"></news-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed} from "vue";
// import News from "@/types/News";
import NewsList from "@/components/NewsList.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    "news-list": NewsList,
  },
  setup() {
    const store = useStore();
    onMounted(()=> store.dispatch('fetchData'));
    const loading = computed(() => store.state.newsItems)
    // const newsItems = ref<News[]>([
    //   {
    //     title: "farm worker",
    //     author: "lon lon ranch",
    //     description: "ABCDERG",
    //   },
    //   {
    //     title: "quarryman",
    //     author: "lon lon ranch",
    //     description: "ABCDERG",
    //   },
    // ]);
    return { loading };
  },
});
</script>
