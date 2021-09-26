<template>
  <div class="news-list">
    <ul>
      <li v-for="news in newsItems" :key="news.title">
        <h2>{{ news.title }}</h2>
        <div class="author">
          <p>{{ news.author }}</p>
        </div>
        <div class="description">
          <p>{{ news.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import News from "@/types/News";

export default defineComponent({
  props: {
    newsItems: {
      required: true,
      type: Array as PropType<News[]>,
    },
  },
});
</script>

<style scoped lang="scss">
.news-list {
  max-width: 960px;
  margin: 40px auto;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }

  h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
}
.author {
  display: flex;

  p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }
}
</style>
