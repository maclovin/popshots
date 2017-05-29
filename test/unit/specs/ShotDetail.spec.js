import 'babel-polyfill';
import '@/utils/filters';
import Vue from 'vue';
import VueFractionGrid from 'vue-fraction-grid';
import VueMaterial from 'vue-material';
import Moment from 'moment';
import { ShotDetail } from '@/components';
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

describe('ShotDetail.vue', () => {
  const Constructor = Vue.extend(ShotDetail);
  const vm = new Constructor({
    propsData: {
      shot: ShotMock,
      detailStatus: 'DONE',
    },
  }).$mount();

  it('should render correct title', () => {
    expect(vm.$el.querySelector('h2.md-title').textContent).to.equal(ShotMock.title);
  });

  it('should render correct time from now', () => {
    const shotDateFromNow = Moment(ShotMock.created_at).fromNow();

    expect(vm.$el.querySelector('label.md-subhead').textContent).to.equal(shotDateFromNow);
  });

  it('should render correct image source', () => {
    expect(vm.$el.querySelector('.shot-detail__image').attributes[1].value).to.equal(ShotMock.images.normal);
  });
});
