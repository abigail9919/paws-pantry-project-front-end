import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Forms from './pages/Forms/Forms';
import './App.css';
import UpcomingAppointment from './pages/UpcomingAppointment/UpcomingAppointment';

function App() {
  return (
    <div className="App">
      <Router basename="/paws-pantry-project-front-end">
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Search" element = {<Search/>} />
          <Route path="/Forms" element = {<Forms/>} />
          {/* <Route path="/UpcomingAppointment" element = {<UpcomingAppointment/>} /> */}
          <Route path="/UpcomingAppointment/:clientID/:firstName" element = {<UpcomingAppointment/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;