import { Header } from "./components/Header"
import { ContentHome } from "./components/ContentHome"
import { Footer } from "./components/Footer"
import './styles/global.css'

function App() {
  return (
    <section className="containerHomePage">
      <Header/>
      <ContentHome/>
      <Footer/>
    </section>
  )
}

export default App
