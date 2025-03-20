import PopularMovieCardListContainer from '../popular-movie-card-list/PopularMovieCardListContainer'

export default function NoSearchResults() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-ful h-48 flex justify-center items-center">
        <p>원하는 검색결과를 찾지 못했습니다.</p>
      </div>
      <PopularMovieCardListContainer />
    </div>
  )
}
