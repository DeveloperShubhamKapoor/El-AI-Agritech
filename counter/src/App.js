import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import { Nextpage } from './components/Nextpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path="/nextpage" element={<Nextpage/>} />
      </Routes>
    </div>
  );
}

export default App;
