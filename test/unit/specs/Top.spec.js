import 'babel-polyfill';
import Vue from 'vue';
import VueFractionGrid from 'vue-fraction-grid';
import VueMaterial from 'vue-material';
import { Top } from '@/components';

Vue.use(VueFractionGrid);
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

describe('Top.vue', () => {
  const Constructor = Vue.extend(Top);
  const vm = new Constructor({
    propsData: {
      enable: true,
    },
  }).$mount();

  it('should render top correct with a vue-router element', () => {
    expect(vm.$el.querySelector('.md-title').tagName).to.equal('ROUTER-LINK');
  });

  it('should render POP text in a separate label', () => {
    expect(vm.$el.querySelector('.md-title__pop').textContent).to.equal('Pop');
  });
});
