import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './components/Posts.vue'
import myfriend from './views/myfriend.vue'
import eventdetails from './views/eventdetails.vue'
import interestselection from './views/interestselection.vue'

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
      path: '/myfriend',
      name: 'myfriend',
      component: myfriend
    },
    {
      path: '/eventdetails',
      name: 'eventdetails',
      component: eventdetails
    },
    {
      path: '/interestselection',
      name: 'interestselection',
      component: interestselection
    }
  ]
})
