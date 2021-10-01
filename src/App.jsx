import Header from './modules/header/Header'
import Home from './modules/home/Home'
import About from './modules/about/About'
import Services from './modules/services/Services'
import Menu from './modules/menu/Menu'
import MobileApp from './modules/mobile-app/MobileApp'
import Contact from './modules/contact/Contact'
import ScrollToTop from './components/scroll-top/ScrollToTop'
import Footer from './modules/footer/Footer'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Services />
        <Menu />
        <MobileApp />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
