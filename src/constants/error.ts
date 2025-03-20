export const ERROR_RESPONSE = {
  // 공통 에러
  BAD_REQUEST: { status: 400, message: '잘못된 요청' },
  UNAUTHORIZED: { status: 401, message: '인증되지 않음. 로그인 필요' },
  FORBIDDEN: { status: 403, message: '접근 불가. 권한 없음' },
  NOT_FOUND: { status: 404, message: '요청한 정보를 찾을 수 없음' },
  SERVER_ERROR: { status: 500, message: '서버 오류. 다시 시도하세요.' },
  DB_ERROR: { status: 500, message: 'DB 조회 오류' },

  // 특정 요청 관련 에러
  MISSING_SLUG: { status: 400, message: '필수 요청 파라미터 "slug" 누락' },
  MOVIE_NOT_FOUND: { status: 404, message: '해당 영화를 찾을 수 없음' },
  FETCH_MOVIE_FAIL: { status: 500, message: '영화 정보를 불러올 수 없음' },
} as const

export const CONFIG_ERROR = {
  MISSING_BASE_URL: { status: 500, message: '환경 변수 설정 오류: BASE_URL 없음' },
} as const

export const CLIENT_ERROR = {
  MOVIE_LIKE_FAILED: { message: '좋아요를 반영할 수 없습니다. 잠시 후 다시 시도해주세요.' },
  MOVIE_UNLIKE_FAILED: { message: '좋아요 취소를 반영할 수 없습니다. 잠시 후 다시 시도해주세요.' },
}
