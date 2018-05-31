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


router.afterEach((to) => {
  gtag('config', 'UA-68543693-5', {'page_path': to.path });
})

new Vue({
  el: '#app',
  router: router,
});