import Header from './components/header';
import Hero from './components/hero';
import About from './components/about'
import './style.css';
import Skills from './components/skills';
import Footer from './components/footer';
import Create from './components/create';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <div className='block block--dark block--skewed-left hero'>
        <Header />
        <Hero />
      </div>
      <About />
      <Skills />
      <Services />
      <Create />
      <Footer />
    </div>
  );
}

export default App;
