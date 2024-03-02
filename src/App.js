import './App.css';
import Navbar from './navbar';
import Main from './main';
import About from './about';
import Work from './work';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
