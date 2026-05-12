import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Fleet from './components/Fleet/Fleet';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;