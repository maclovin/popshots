import 'babel-polyfill';
import Vue from 'vue';
import VueFractionGrid from 'vue-fraction-grid';
import VueMaterial from 'vue-material';
import { UserDetail } from '@/components';
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

describe('UserDetail.vue', () => {
  const Constructor = Vue.extend(UserDetail);
  const vm = new Constructor({
    propsData: {
      user: ShotMock.user,
    },
  }).$mount();

  it('Should render correct with avatar', () => {
    expect(vm.$el.querySelector('.user-detail__avatar img').attributes[1].value).to.equal(ShotMock.user.avatar_url);
  });

  it('Should render correct with personal links', () => {
    expect(vm.$el.querySelectorAll('.user-detail__contact-list__item').length).to.equal(2);
  });
});
