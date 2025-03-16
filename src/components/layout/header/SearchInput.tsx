'use client'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export default function SearchInput({ value, onChange, className }: SearchInputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`w-full h-full bg-transparent outline-none placeholder:text-sm ${className}`}
      placeholder="여기서 검색할 수 있습니다!"
    />
  )
}
