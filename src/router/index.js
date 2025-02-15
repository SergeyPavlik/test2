import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostListView from '@/views/PostListView.vue'
import UserListView from '@/views/UserListView.vue'
import CommentsView from '@/views/CommentsView.vue'
import PostView from '@/views/PostView.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/postlist',
      name: 'post-list',
      component: PostListView,
    },
    {
      path: '/users',
      name: 'user-list',
      component: UserListView
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentsView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView,
      props: true
    },
  ],
  history: createWebHistory()
})

export default router
