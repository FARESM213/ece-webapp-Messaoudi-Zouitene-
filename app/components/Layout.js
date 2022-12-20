
import Header from './header.js'
import Footer from './footer.js'
export default function Layout({
  children
}){
  return (
    <div>
      <Header />
      <main className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">
      {children}
      </main>
      <Footer />
    </div>
  )
}
