<script setup>
import { ref } from 'vue';
const comments = ref(null)
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => (comments.value = json));
</script>

<template>
  <main>
    <h1>Список комментариев</h1>
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
      <template v-for="comment in comments" :key="comment.id">
        <li
          v-show="comment.name !== undefined"
          @click.prevent.right="delete comment.name"
        >
          {{ comment.name }}
        </li>
      </template>
    </ol>
    <section>
      <router-view />
    </section>
  </main>
</template>