import 'babel-polyfill';
import Vue from 'vue';
import VueFractionGrid from 'vue-fraction-grid';
import VueMaterial from 'vue-material';
import { Spinner } from '@/components';

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

describe('Spinner.vue', () => {
  const Constructor = Vue.extend(Spinner);
  const vm = new Constructor({
    propsData: {
      enable: true,
    },
  }).$mount();

  it('should render spinner correct SVG component', () => {
    expect(vm.$el.querySelector('svg').attributes[1].value).to.equal('md-spinner-draw');
  });
});
