'use client'

import { useSearchStore } from '@/stores/useSearchStore'
import SearchInput from './SearchInput'

interface SearchInputContainerProps {
  className?: string
}

export default function SearchInputContainer({ className }: SearchInputContainerProps) {
  const { searchQuery, setSearchQuery } = useSearchStore()

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchQuery(value)
  }
  return (
    <SearchInput className={className} value={searchQuery} onChange={handleSearchQueryChange} />
  )
}
