<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getJsonplaceholderData } from "@/api/myFetch.js";

const posts = ref([]);
const users = ref([]);
const route = useRoute();
const id = computed(() => route.params.id);

(async () => {
  posts.value = await getJsonplaceholderData("posts");
})();

(async () => {
  users.value = await getJsonplaceholderData('users')
})()
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
            Заголовок: {{ post.title }}
            <br />
            Текст: {{ post.body }}
            <br />
            Об авторе:
            <template v-for="user in users" :key="user.id">
              <ul v-if="post.userId === user.id">
                <li>Имя пользователя: {{ user.name }}</li>
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
  </main>
</template>
