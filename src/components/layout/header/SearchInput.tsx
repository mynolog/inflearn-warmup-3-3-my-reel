interface SearchInputProps {
  className?: string
}

export default function SearchInput({ className }: SearchInputProps) {
  return (
    <input
      className={`w-full h-full bg-transparent outline-none placeholder:text-sm ${className}`}
      placeholder="여기서 검색할 수 있습니다!"
    />
  )
}
