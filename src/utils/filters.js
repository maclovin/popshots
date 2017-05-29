import Vue from 'vue';
import Moment from 'moment';

Vue.filter('formatDate', date => Moment(date).fromNow());
