import 'babel-polyfill';
import Vue from 'vue';
import VueFractionGrid from 'vue-fraction-grid';
import { Bottom } from '@/components';

Vue.use(VueFractionGrid);

describe('Bottom.vue', () => {
  const Constructor = Vue.extend(Bottom);
  const vm = new Constructor().$mount();

  it('should render a github url', () => {
    expect(vm.$el.querySelector('a').textContent)
    .to.equal('Github');
  });
});
