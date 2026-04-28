import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Services />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
