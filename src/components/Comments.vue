<script setup>
import { ref } from "vue";
import { getJsonplaceholderData } from "@/api/myFetch.js";

const comments = ref(null);

(async () => {
  comments.value = await getJsonplaceholderData("comments");
})();
</script>

<template>
  <main>
    <h1 class="text-4xl m-5 text-center">Список комментариев</h1>
    <nav class="w-100% m-0 bg-zinc-50  opacity-80 p-2">
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
        <li class="text-neutral-400">Список комментариев</li>
      </ol>
    </nav>
    <ol class=" text-lg  m-3 list-inside list-decimal *:first-letter:uppercase italic">
      <li
        v-for="(comment, index) in comments"
        :key="comment.id"
        @click.prevent.right="comments.splice(index, 1)"
      >
        {{ comment.name }}.
        <p class="first-letter:uppercase mb-3">{{ comment.body }}.</p>
      </li>
    </ol>
    <section>
      <router-view />
    </section>
  </main>
</template>
