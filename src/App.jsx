import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'

const App = () => {

  return (
    <div>
      <header>
        <Nav />

      </header>
      <main>
        <Home />
      </main>


    </div>
  )
}

export default App