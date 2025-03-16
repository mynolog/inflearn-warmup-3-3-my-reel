export const ERROR_RESPONSE = {
  FETCH_MOVIE_FAIL: { status: 500, message: '영화 정보를 불러올 수 없음' },
  NOT_FOUND: { status: 404, message: '요청한 정보를 찾을 수 없음' },
  UNAUTHORIZED: { status: 401, message: '인증되지 않음. 로그인 필요' },
  FORBIDDEN: { status: 403, message: '접근 불가. 권한 없음' },
  SERVER_ERROR: { status: 500, message: '서버 오류. 다시 시도하세요.' },
}

export const CONFIG_ERROR = {
  MISSING_BASE_URL: { status: 500, message: '환경 변수 설정 오류: BASE_URL 없음' },
}
