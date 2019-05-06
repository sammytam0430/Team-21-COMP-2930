import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './components/Posts.vue'
import CreateEvent from '@/views/CreateEvent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateEvent
    }
  ]
})
