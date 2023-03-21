import './home.css';
import IUPUILogo from '../../images/IUPUILogo.jpg';
import jaguar from '../../images/stuffed-jaguar.jpg';
import search from '../../images/search.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import IUsig from '../../images/iu-sig-formal.png';

function Home() {
    return (
        <div>
            <div className = "upper-header">
                <img className="IU-logo" src={IUPUILogo} alt="IUPUI Logo"/>
                <div className = "nav-wrapper">
                    <a href="#">News</a>
                    <a href="#">Events</a>
                    <a href="#">About & Contact</a>
                    <a href="#"><img src={search}/></a>
                </div>//helllo,
            </div>
            <header className="student-affairs-header">Division of <b>Student Affairs</b></header>
            <nav>
                <a href="#">Get Involved</a>
                <a href="#">Campus Center</a>
                <a href="#">Health & Wellness</a>
                <a href="#">Housing</a>
                <a href="#" className = "red-bottom">Advocacy & Resources</a>
                <a href="#">Student Conduct</a>
            </nav>
            <img className = "jaguar-image" src={jaguar} alt="Stuffed Jaguar"/>

            <article>
                <div className="word-content">
                <div className = "breadcrumbs">
                    <a href="#">Home</a> / 
                    <a href="#">Advocacy & Resources</a> /
                    <a href="#">Food and Clothing Services</a>
                    <br />
                    <div className="paws-title">PAWS' PANTRY</div>
                </div>

                <h1>Welcome to the Pantry</h1>
                <h3>How to shop for free food and personal hygiene products</h3>

                <h4>Here’s what you need to know to make your visit to the pantry a breeze:</h4>
                <ul>
                    <li>Clients experiencing food insecurity can physically shop in the pantry, as you would in a store, for your own items. There is a check-in and check-out process, and a limit system is in place to allow for everyone to get what they need.</li>
                    <li>Appointments are required to be made 24 hours in advance. Each appointment will allow 15 minutes for shopping.</li>
                    <li><i>Every effort will be made to provide appointments for those with food insecurity. If you are unable to make an appointment, please email jagsfood@iu.edu and a one-time emergency pre-packaged food bag will be provided.</i></li>
                    <li>Every client, even if it is not your first time visiting the pantry, will need to fill out an intake form for the 2022-23 school year.</li>
                </ul>
                </div>

                {/* react component?? */}
                <div className="location-and-hours">
                <h2>Location and Hours</h2>
                <h3>Paws’ Pantry – Campus Center 130</h3>

                Fall 2023 Hours <br /><br />

                All appointments must be made online 24 hours in advance. <br /><br />

                Tuesdays (students only)<br />
                10 a.m.–4 p.m. <br /><br />

                Wednesdays (students only)<br />
                11 a.m.–5 p.m.<br /><br />

                Thursdays (students, faculty, and staff)<br />
                12noon–6 p.m.
                </div>

            </article>

            <div className = "left-side-nav">
                <a href="#">Get Help</a>
                <a href="#">Interpersonal Violence Prevention and Response</a>
                <a href="#">Emergency Resources</a>
                <a href="#">Food & Clothing Services</a>
                <a href="#" className="gray">Paws' Closet</a>
                <a href="#" className="gray red">Paws' Pantry</a>
                <a href="#">Refer to or Contact Student Advocacy</a>
            </div>

            <div className="button-wrapper">
                <label for="submit-button">Schedule Now</label><br />
                <button className='submit-button' onClick={event =>  window.location.href='/Search'}><b>Get Started</b></button>
            </div>

            <div className="questions-wrapper">
                <h3>Questions?</h3>
                <h4>Contact us at <button><b>jagsfood@iupui.edu</b></button> or stop by the pantry to speak to a Paws’ Pantry team member.</h4>
            </div>

            <div className = "bottom-content">
                <h3>Support Paws' Pantry Today</h3>
                <button>GIVE NOW</button>
                    <div className="social-links">
                        <h5>INTRANET</h5>
                        <div className="socialFlex">
                            <img src={twitter} alt="twitter icon"/>
                            <img src={instagram} alt="instagram icon"/>
                            <img src={youtube} alt="youtube icon"/>
                        </div>
                    </div>
                <div className='necessary'></div>

                <footer>
                    <div className="footerFlex">
                        <img src={IUsig} alt=""/>
                        <div className="links">
                            <a href="#">Accessibility</a> |
                            <a href="#">Privacy Notice</a> |
                            <a href="#">Copyright © 2023 The Trustees of Indiana University</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;