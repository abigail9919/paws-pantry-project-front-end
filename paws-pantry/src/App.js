import Confirmation from './pages/Confirmation/Confirmation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Confirmation/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
