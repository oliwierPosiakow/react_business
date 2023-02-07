import Header from './Head'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default App
