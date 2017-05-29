import Vue from 'vue';
import Router from 'vue-router';
import { Home, Shot } from '@/screens';

Vue.use(Router);

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/shot/:id',
      name: 'Shot',
      component: Shot,
    },
  ],
});
