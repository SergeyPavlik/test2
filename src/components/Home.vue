<template>
  <main class="m-5 justify-items-center">
    <h1 class="text-4xl mb-5">Главная страница</h1>
    <section>
      <ul
        class="list-inside list-disc bg-zinc-50 opacity-80 bg-contain font-serif border-2 rounded-xl shadow-2xl shadow-white p-2 px-10 italic *:underline *:hover:decoration-lime-800 text-2xl"
      >
        <li>
          <router-link :to="{ name: 'post-list' }"> Список постов </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-list' }">
            Список пользователей
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'comments' }">
            Список комментариев
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>
