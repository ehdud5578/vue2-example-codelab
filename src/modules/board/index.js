import _cloneDeep from 'lodash/cloneDeep';
import _concat from 'lodash/concat';
import _merge from 'lodash/merge';
import { MUTATIONS, ACTIONS, GETTERS } from '@/common/constants';
import { boardService } from '@/services/api';

const INIT_DETAIL_DATA = () => ({
  id: 0,
  userId: 0,
  title: '',
  content: '',
  thumnail: '',
  regDate: '',
  writer: {
    id: 0,
    email: '',
    name: '',
    regDate: '',
  },
});

export default {
  state: {
    boards: [],
    boardDetail: INIT_DETAIL_DATA(),
  },
  mutations: {
    [MUTATIONS.BOARD.APPEND](state, payload = []) {
      state.boards = _concat(state.boards, payload);
    },
    [MUTATIONS.BOARD.SET](state, payload = []) {
      state.boards = payload;
    },
    [MUTATIONS.BOARD.INIT](state) {
      state.boards = [];
    },
    [MUTATIONS.BOARD.DETAIL](state, payload) {
      _merge(state.boardDetail, payload);
    },
  },
  actions: {
    async [ACTIONS.BOARD.APPEND](context, payload) {
      const data = await boardService.get('/', payload);
      context.commit(MUTATIONS.BOARD.APPEND, data.contents);
      return data;
    },
    async [ACTIONS.BOARD.DETAIL](context, payload) {
      const data = await boardService.get(`/${payload}`);
      context.commit(MUTATIONS.BOARD.DETAIL, data);
      return data;
    },
  },
  getters: {
    [GETTERS.BOARD.LIST]({ boards }) {
      return boards.map((item) => item);
    },
    [GETTERS.BOARD.DETAIL](state) {
      return _cloneDeep(state.boardDetail);
    },
  },
};
