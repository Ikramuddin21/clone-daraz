import './App.css';
import Hero from './Pages/Home/Hero/Hero';
import Adds from './Pages/Shared/Adds/Adds';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Adds />
    </div>
  );
}

export default App;
