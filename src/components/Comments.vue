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
      <li
        v-for="(comment, index) in comments"
        :key="comment.id"
        @click.prevent.right="comments.splice(index, 1)"
      >
        {{ comment.name }}
      </li>
    </ol>
    <section>
      <router-view />
    </section>
  </main>
</template>
