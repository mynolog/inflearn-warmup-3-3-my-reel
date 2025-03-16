import Image from 'next/image'

interface MainProps {
  id: string
}

//TODO: 더미 데이터 삭제 후 실제 데이터 연동하기
export default function Main({ id }: MainProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
      <div className="w-full md:w-1/3 max-w-sm">
        <Image
          src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
          priority
          width={500}
          height={750}
          alt="image"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col px-6 gap-4">
        <h2 className="text-3xl font-extrabold">Dune: Part Two</h2>
        <p className="text-lg">
          Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on
          a path of revenge against the conspirators who destroyed his family. Facing a choice
          between the love of his life and the fate of the known universe, Paul endeavors to prevent
          a terrible future only he can foresee.
        </p>
        <div className="text-lg font-bold">
          <i className="fas fa-star mr-1" />
          <span>Vote Average: 8.3</span>
        </div>
        <div className="text-lg font-bold">Popularity: 3437.313</div>
        <div className="text-lg font-bold">Release Data: 2024-02-27</div>
      </div>
    </div>
  )
}
