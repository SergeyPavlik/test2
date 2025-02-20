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
  users.value = await getJsonplaceholderData("users");
})();
</script>

<template>
  <main>
    <h1 class="text-4xl m-5 text-center">Пост № {{ id }}</h1>
    <nav class="w-100% m-0 bg-zinc-50 opacity-80 p-2">
      <ol class="flex justify-center">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="text-neutral-400 transition duration-500 hover:text-black/80 hover:underline decoration-1"
          >
            Главная страница
          </router-link>
        </li>
        <li>
          <span class="mx-2 text-neutral-400">/</span>
        </li>
        <li>
          <router-link
            :to="{ name: 'post-list' }"
            class="text-neutral-400 transition duration-500 hover:text-black/80 hover:underline decoration-1"
          >
            Список постов
          </router-link>
        </li>
        <li>
          <span class="mx-2 text-neutral-400">/</span>
        </li>
        <li class="text-neutral-400">Пост № {{ id }}</li>
      </ol>
    </nav>
    <ul v-for="post in posts" :key="post.title" class="text-lg">
      <li v-if="post.id == id">
        <p class="italic first-letter:uppercase text-center m-3">
          {{ post.title }}.
        </p>
        <p class="italic first-letter:uppercase text-center m-3">
          {{ post.body }}.
        </p>
        <div class="flex justify-end m-3">
          <template v-for="user in users" :key="user.id">
            <ul v-if="post.userId === user.id">
              <li>Автор: {{ user.name }}</li>
              <li>Email: {{ user.email }}</li>
              <li>Телефон: {{ user.phone }}</li>
              <li>Website: {{ user.website }}</li>
            </ul>
          </template>
        </div>
      </li>
    </ul>
    <section>
      <router-view />
    </section>
  </main>
</template>
