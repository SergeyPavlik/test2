<script setup>
import { ref } from "vue";
import { getJsonplaceholderData } from "@/api/myFetch.js";

const posts = ref([]);

(async () => {
  posts.value = await getJsonplaceholderData("posts");
})();
</script>

<template>
  <main>
    <h1>Список постов</h1>
    <header>
      <ul class="breadcrumbs">
        <li>
          <router-link :to="{ name: 'home' }"> Главная страница </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'post-list' }"> Список постов </router-link>
        </li>
      </ul>
    </header>

    <ol>
      <li
        v-for="(post, index) in posts"
        :key="post.id"
        @click.prevent.right="posts.splice(index, 1)"
      >
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </li>
    </ol>

    <section>
      <router-view />
    </section>
  </main>
</template>
