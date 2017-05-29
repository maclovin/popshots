import 'babel-polyfill';
import '@/utils/filters';
import Vue from 'vue';
import VueFractionGrid from 'vue-fraction-grid';
import VueMaterial from 'vue-material';
// import Moment from 'moment';
import { ShotsList } from '@/components';
import ShotMock from './utils/shot.mock';

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

describe('ShotsList.vue', () => {
  const Constructor = Vue.extend(ShotsList);
  const vm = new Constructor({
    propsData: {
      shots: [ShotMock, ShotMock, ShotMock],
      listStatus: 'DONE',
      currentPage: 1,
    },
  }).$mount();

  it('should render list of 3 shots', () => {
    expect(vm.$el.querySelectorAll('.shots-list__item').length).to.equal(3);
  });

  it('should render loadmore button', () => {
    expect(vm.$el.querySelector('.shots-list__load-more > .md-icon').textContent).to.equal('add');
  });
});
