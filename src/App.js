import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="../Search/Search" element = {<Search/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;