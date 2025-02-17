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
