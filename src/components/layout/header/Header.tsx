import LogoLink from '@/components/common/logo/LogoLink'
import NavList from './NavList'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 px-4 py-3 bg-gray-800 flex items-center justify-between z-50">
      <nav className="flex items-center gap-4 text-white">
        <LogoLink className="text-red-500 text-2xl" />
        <NavList />
      </nav>

      <div className="w-full max-w-72 flex items-center border border-white bg-transparent text-sm text-white rounded-lg p-2 group focus-within:shadow-sm focus-within:shadow-white focus-within:scale-105 transition-hover">
        <label className="w-full h-full flex items-center gap-2 relative">
          <i className="fas fa-search group-focus-within:opacity-0 group-focus-within:pointer-events-none transition-opacity duration-200 absolute left-2" />
          <SearchInput className="pl-8 group-focus-within:pl-1 transition-all duration-200" />
        </label>
      </div>
    </header>
  )
}
