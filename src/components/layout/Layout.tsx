import Header from './header/Header'
import Footer from './footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full max-w-4xl mx-auto py-20 px-4">{children}</main>
      <Footer />
    </>
  )
}
