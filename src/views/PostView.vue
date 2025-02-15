<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const posts = ref(null);
const users = ref(null);
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => (posts.value = data));
// defineProps({
//   userId: Number,
//   id: Number,
//   title: String,
//   body: String,
// });
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => (users.value = data));
const route = useRoute();
const id = computed(() => route.params.id);
</script>

<template>
  <main>
    <h1>Пост № {{ id }}</h1>
    <header>
      <ul class="breadcrumbs">
        <li>
          <router-link :to="{ name: 'home' }"> Главная страница </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'post-list' }"> Список постов </router-link>
        </li>
        <li>Пост № {{ id }}</li>
      </ul>
    </header>
    <div>
      <ol>
        <template v-for="post in posts" :key="post.title">
          <li v-if="post.id == id">
            {{ post.title }}
            <br />
            {{ post.body }}
            <br />
            Об авторе:
            <template v-for="user in users" :key="user.id">
              <ul v-if="post.userId === user.id">
                <li >Имя пользователя: {{ user.name }}</li>
                <li>Email: {{ user.email }}</li>
                <li>Телефон: {{ user.phone }}</li>
                <li>Website: {{ user.website }}</li>
              </ul>
            </template>
          </li>
        </template>
      </ol>
    </div>
    <section>
      <router-view />
    </section>
    <footer></footer>
  </main>
</template>
