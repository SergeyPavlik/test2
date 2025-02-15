<script setup>
import { ref } from 'vue';
const users = ref(null)
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => (users.value = json));
</script>

<template>
  <main>
    <h1>Список пользователей</h1>
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
      <template v-for="user in users" :key="user.id">
        <li
          v-show="user.name !== undefined"
          @click.prevent.right="delete user.name"
        >
          {{ user.name }}
        </li>
      </template>
    </ol>
    <section>
      <router-view />
    </section>
  </main>
</template>
