// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import VueFractionGrid from 'vue-fraction-grid';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
