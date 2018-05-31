import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog/:slug',
      component: Detail
    },
  ]
});

new Vue({
  el: '#app',
  router: router,
});