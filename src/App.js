import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Forms from './pages/Forms/Forms';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpcomingAppointment from './pages/UpcomingAppointment/UpcomingAppointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Search" element = {<Search/>} />
          <Route path="/Forms" element = {<Forms/>} />
          {/* <Route path="/UpcomingAppointment" element = {<UpcomingAppointment/>} /> */}
          <Route path="/UpcomingAppointment/:clientID/:firstName" element = {<UpcomingAppointment/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;