<template>
    <main>
      <h1>Главная страница</h1>
      <section>
        <ul>
            <li>
                <router-link :to="{ name: 'post-list' }">
                    Список постов
                </router-link>
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