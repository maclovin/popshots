import Vue from 'vue';
import Router from 'vue-router';
import { Home, Shots } from '@/screens';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/shots',
      name: 'Shots',
      component: Shots,
    },
  ],
});
