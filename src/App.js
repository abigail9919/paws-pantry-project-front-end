import IUPUILogo from './images/IUPUILogo.jpg';
import jaguar from './images/stuffed-jaguar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "upper-header">
        <img className="IU-logo" src={IUPUILogo} alt="IUPUI Logo"/>
        <div className = "nav-wrapper">
          <a href="#">News</a>
          <a href="#">Events</a>
          <a href="#">About & Contact</a>
          {/* fake search button here */}
        </div>
      </div>
      <header className="student-affairs-header">Division of <b>Student Affairs</b></header>
      <nav>
        <a href="#">Get Involved</a>
        <a href="#">Campus Center</a>
        <a href="#">Health & Wellness</a>
        <a href="#">Housing</a>
        <a href="#">Advocacy & Resources</a>
        <a href="#">Student Conduct</a>
      </nav>
      <img className = "jaguar-image" src={jaguar} alt="Stuffed Jaguar"/>
    </div>
  );
}

export default App;
