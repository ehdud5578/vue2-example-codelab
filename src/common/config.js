/**
 * 앱 내 설정을 관리합니다.
 * 개발 환경에 따라 분기처리가 필요한 변수는 .env파일에서 관리해야합니다.
 *
 */
const { NODE_ENV, VUE_APP_API_URL } = process.env;

export const MODE = NODE_ENV;
export const API_URL = VUE_APP_API_URL;
