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
    <h1 class="text-4xl m-5 text-center">Список постов</h1>
    <nav class="w-100% m-0 bg-zinc-50 opacity-80 p-2">
      <ol class="flex">
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
        <li class="text-neutral-400">Список постов</li>
      </ol>
    </nav>
    <ol>
      <li
        class="ml-2 text-lg "
        v-for="(post, index) in posts"
        :key="post.id"
        @click.prevent.right="posts.splice(index, 1)"
      >
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          <div class="flex">
            Пост № {{ post.id }}:
            <p class="italic first-letter:uppercase ml-1">{{ post.title }}</p>
          </div>
        </router-link>
      </li>
    </ol>

    <section>
      <router-view />
    </section>
  </main>
</template>
