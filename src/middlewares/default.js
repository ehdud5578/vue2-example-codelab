import store from '@/store';
import { VIEW_NAVI } from '../common/constants';
import { GETTERS } from '@/common/constants';
import Vue from 'vue';

const { INTRO, HOME, LOGIN, USER_REGIST } = VIEW_NAVI;
const ANONYMOUS_VIEW = [INTRO, HOME, LOGIN, USER_REGIST];
export default (to, from, next) => {
  if (!ANONYMOUS_VIEW.includes(to.name) && store.getters[GETTERS.AUTH.IS_ANONYMOUS]) {
    Vue.prototype.$alert('세션정보를 찾을 수 없습니다.<br/> 홈으로 이동합니다.').then(() => {
      next({ name: LOGIN });
    });
    return;
  }
  next();
};
