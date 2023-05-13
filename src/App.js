import './App.css';
import Header from './componentes/Header/Header';
import Home from './componentes/Home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-section'>
        <Home />
      </div>
    </div>
  );
}

export default App;
