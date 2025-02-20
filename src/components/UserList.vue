<script setup>
import { ref } from "vue";
import { getJsonplaceholderData } from "@/api/myFetch.js";

const users = ref([]);

(async () => {
  users.value = await getJsonplaceholderData("users");
})();
</script>

<template>
  <main>
    <h1 class="text-4xl m-5 text-center">Список пользователей</h1>
    <nav class="w-100% m-0 bg-zinc-50 opacity-80 p-2 ">
      <ol class="flex justify-center">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class=" text-neutral-400 transition duration-500 hover:text-black/80 hover:underline decoration-1"
          >
            Главная страница
          </router-link>
        </li>
        <li>
          <span class="mx-2 text-neutral-400">/</span>
        </li>
        <li class="text-neutral-400">Список пользователей</li>
      </ol>
    </nav>
    <ol class="text-center m-3 italic text-lg ">
      <li
        v-for="(user, index) in users"
        :key="user.id"
        @click.prevent.right="users.splice(index, 1)"
      >
        {{ user.name }}
      </li>
    </ol>
    <section>
      <router-view />
    </section>
  </main>
</template>
