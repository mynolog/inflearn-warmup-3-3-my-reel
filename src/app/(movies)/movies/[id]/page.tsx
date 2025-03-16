import Main from './Main'

interface MovieDetailParams {
  params: {
    id: string
  }
}

export default async function MovieDetail({ params }: MovieDetailParams) {
  return (
    <div className="max-w-4xl mx-auto flex items-center md:items-start py-20 px-4 bg-blue-100 absolute top-0 bottom-0 left-0 right-0">
      <Main id="1" />
    </div>
  )
}
