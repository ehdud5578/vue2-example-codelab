import BaseApiService from './core';

class AuthService extends BaseApiService {
  constructor() {
    super('/auth');
  }
  regist(name, email, password) {
    return this.post('/register', { name, email, password });
  }
  login(email, password) {
    return this.post('/login', { email, password });
  }
  logout() {
    return this.post('/logout');
  }
  refreshToken(refreshToken) {
    return this.post('/refresh-tokens', { refreshToken });
  }
  resetPasswordToken(email) {
    return this.post('/forgot-password', { email });
  }
  resetPassword(refreshToken, password) {
    return this.post(`/reset-password?token=${refreshToken}`, { password });
  }
  sessionLogin(email, password) {
    return this.post('/session/login', { email, password });
  }
  sessionLogout() {
    return this.post('/logout');
  }
}

export default new AuthService();
