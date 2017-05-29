// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/utils/filters';
import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import VueFractionGrid from 'vue-fraction-grid';
import { Bottom, ShotDetail, ShotsList, Spinner, Top, UserDetail } from '@/components';
import App from './App';
import router from './router';

// All global sub-components should be declared here
Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'white',
  accent: 'red',
  warn: 'red',
  background: {
    color: 'grey',
    hue: '100',
  },
});

Vue.use(VueFractionGrid, {
  container: '1020px',
  gutter: '32px',
  approach: 'mobile-first',
  breakpoints: {
    compact: '320px 480px',
    tablet: '481px 1019px',
    desktop: '1020px',
  },
});

Vue.component('bottom', Bottom);
Vue.component('shot-detail', ShotDetail);
Vue.component('shots-list', ShotsList);
Vue.component('spinner', Spinner);
Vue.component('top', Top);
Vue.component('user-detail', UserDetail);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

Vue.use(Vuex);
