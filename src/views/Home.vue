<template>
  <div class="home">
    <news-list :newsItems="newsItems"></news-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import News from "@/types/News";
import NewsList from "@/components/NewsList.vue";

export default defineComponent({
  name: "Home",
  components: {
    "news-list": NewsList,
  },
  setup() {
    const newsItems = ref<News[]>([
      {
        title: "farm worker",
        author: "lon lon ranch",
        description: "ABCDERG",
      },
      {
        title: "quarryman",
        author: "lon lon ranch",
        description: "ABCDERG",
      },
    ]);
    return { newsItems };
  },
});
</script>
