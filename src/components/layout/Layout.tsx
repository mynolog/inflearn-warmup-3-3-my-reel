import Header from './header/Header'
import Footer from './footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full max-w-4xl mx-auto pt-20 pb-16 px-1">{children}</main>
      <Footer />
    </>
  )
}
