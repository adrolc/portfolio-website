import Nav from './components/nav/Nav'
import TopBar from './components/topbar/TopBar'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import GLOW from 'assets/glow1.png'


function App() {
  return (
    <>
    <img className='background_glow background_glow-1' src={GLOW} alt="" />
    <img className='background_glow background_glow-2' src={GLOW} alt="" />
    <Nav/>
    <TopBar />
    <Header />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
