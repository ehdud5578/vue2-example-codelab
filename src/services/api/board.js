import BaseApiService from './core';

class BoardService extends BaseApiService {
  constructor() {
    super('/board');
  }
}

export default new BoardService();
