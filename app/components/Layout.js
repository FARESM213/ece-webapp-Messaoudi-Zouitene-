
import Header from './header.js'
import Footer from './footer.js'
export default function Layout({
  children
}){
  return (
    <div>
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}
