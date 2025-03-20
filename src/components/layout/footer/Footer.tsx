export default function Footer() {
  return (
    <footer className="flex justify-center items-center fixed bottom-0 left-0 right-0 p-4 bg-gray-800 z-50">
      <p className="text-white flex gap-2 font-bold">
        Movie Database from
        <a
          className="text-soft-blue-200"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener norefferrer"
        >
          TMDB
        </a>
      </p>
    </footer>
  )
}
