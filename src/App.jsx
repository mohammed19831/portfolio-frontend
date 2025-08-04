import Logo from './components/Logo';
import NavMenu from './components/NavMenu';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Logo />
      <NavMenu />
      <ThemeToggle />
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;