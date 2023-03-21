import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

import Students from './pages/roster/studentRoster';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Search" element = {<Search/>} />
          <Route path="/admin/savedroster" element = {<Students/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;