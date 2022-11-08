import _cloneDeep from 'lodash/cloneDeep';
import { authService } from '@/services/api';
import { ACTIONS, GETTERS, MUTATIONS, STORAGE_KEYS } from '@/common/constants';
import storage from '@/utils/storage';

const INIT_TOKEN_DATA = () => ({
  access: '',
  refresh: '',
});

const STORAGE_TOKEN_DATA = () => ({
  access: storage(STORAGE_KEYS.ACCESS_TOKEN) || '',
  refresh: storage(STORAGE_KEYS.REFRESH_TOKEN) || '',
});

const INIT_SESSION_DATA = () => ({
  id: 0,
  email: '',
  name: '',
  regDate: '',
});

export default {
  state: {
    token: STORAGE_TOKEN_DATA(),
    session: INIT_SESSION_DATA(),
  },
  mutations: {
    [MUTATIONS.AUTH.TOKEN]({ token }, { access, refresh }) {
      token.access = access;
      token.refresh = refresh;
      storage(STORAGE_KEYS.ACCESS_TOKEN, access);
      storage(STORAGE_KEYS.REFRESH_TOKEN, refresh);
    },
    [MUTATIONS.AUTH.SESSION]({ session }, { id, email, name, regDate }) {
      session.id = id;
      session.email = email;
      session.name = name;
      session.regDate = regDate;
    },
  },
  actions: {
    async [ACTIONS.AUTH.LOGIN](context, { email, password }) {
      const { user: session, tokens } = await authService.login(email, password);
      context.commit(MUTATIONS.AUTH.SESSION, session);
      context.commit(MUTATIONS.AUTH.TOKEN, {
        access: tokens.access.token,
        refresh: tokens.refresh.token,
      });
    },
    async [ACTIONS.AUTH.LOGOUT](context) {
      await authService.logout(this.state.auth.token.refresh);
      context.commit(MUTATIONS.AUTH.SESSION, INIT_SESSION_DATA());
      context.commit(MUTATIONS.AUTH.TOKEN, INIT_TOKEN_DATA());
    },
    async [ACTIONS.AUTH.SESSION](context) {
      const session = await authService.getSession();
      context.commit(MUTATIONS.AUTH.SESSION, session);
      return session;
    },
    async [ACTIONS.AUTH.REFRESH_ACCESS](context) {
      const tokens = authService.refreshToken(this.state.auth.token.refresh);
      context.commit(MUTATIONS.AUTH.TOKEN, {
        access: tokens.access.token,
        refresh: tokens.refresh.token,
      });
      return tokens;
    },
  },
  getters: {
    [GETTERS.AUTH.TOKENS]({ token }) {
      return _cloneDeep(token);
    },
    [GETTERS.AUTH.SESSION]({ session }) {
      return _cloneDeep(session);
    },
    [GETTERS.AUTH.IS_ANONYMOUS]({ token }) {
      return !token.access;
    },
  },
};
