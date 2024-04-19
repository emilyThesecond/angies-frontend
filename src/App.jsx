import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Reasons from './pages/Reasons'
import Services from './pages/Services'
import About from './pages/About'
import Areas from './components/Areas'
import Footer from './components/Footer'
import FAQ from './pages/FAQ'
import Contact from './components/Contact'

const App = () => {

  return (
    <div>
      <header>
        <Nav />

      </header>
      <main>
        <Home />
        <Reasons />
        <Services />
        <About />
        <Areas />
        <Contact />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default App