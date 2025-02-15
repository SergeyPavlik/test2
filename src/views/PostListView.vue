<script setup>
import { ref } from "vue";
// import { useRouter, useRoute } from "vue-router";
// const router = useRouter();
// const route = useRoute();
const posts = ref(null);
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => (posts.value = json));
// defineProps({
//   userId: Number,
//   id: Number,
//   title: String,
//   body: String,
// });
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
      <template v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          <li
            v-show="post.title !== undefined"
            @click.prevent.right="delete post.title"
          >
            {{ post.title }}
          </li>
        </router-link>
      </template>
    </ol>

    <section>
      <router-view />
    </section>
  </main>
</template>
