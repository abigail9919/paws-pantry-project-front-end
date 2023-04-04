import './Confirmation.css';

import menu from '../../images/menu.png';
import bearhero from '../../images/bear_hero.jpeg';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import iusigformal from '../../images/iu-sig-formal.png';
import checkmark from '../../images/checkmark.png';

function Confirmation() {
    return (
        <div>
            <header>
      <div className="hamburger-menu">
       <img src={menu}/>
      </div>
      <nav>
        <a href="#">Get Involved</a>
        <a href="#">Campus Center</a>
        <a href="#">Health & Wellness</a>
        <a href="#">Housing</a>
        <a href="#">Advocacy & Resources</a>
        <a href="#">Student Conduct</a>
      </nav>
    </header>
    <div className="wrapper">
    <img className = "jaguar-image" src={bearhero} alt="Stuffed Jaguar"/>
      <div className="confirmation_container">
        <main className="container">
          <h1 id="confirmed?">Confirmed!</h1>
          <div id="verification_btn">
            <img src={checkmark}/>
          </div>
          <p id="verification_text" >Your appointment has been confirmed for Month day at Time</p>

          <button><b>Home</b></button>
        </main>
      </div>

      <div>
        
        <div className="social-links">
          <h5>INTRANET</h5>
          <div className="socialFlex">
            <img src={twitter} alt="twitter icon"/>
            <img src={instagram} alt="instagram icon"/>
            <img src={youtube} alt="youtube icon"/>
          </div>
        </div>
      </div>

      <footer>
          <img src={iusigformal}/>
          <div className="bottom-links">
            <a href="#">Accessibility</a>|
            <a href="#">Privacy Notice</a>|
            <a href="#">Copyright <span> © 2023 The Trustees of</span>  Indiana University</a>
        </div>
      </footer>
    </div>
        </div>
    );
};

export default Confirmation;