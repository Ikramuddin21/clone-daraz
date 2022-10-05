import './App.css';
import Hero from './Pages/Home/Hero/Hero';
import Shop from './Pages/Home/Shop/Shop';
import Adds from './Pages/Shared/Adds/Adds';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Adds />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
