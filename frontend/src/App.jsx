import './index.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <NavBar />
      <section id="landingpage">
        <LandingPage />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
