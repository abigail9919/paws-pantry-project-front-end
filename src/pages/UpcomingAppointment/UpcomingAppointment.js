// import './Search.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Nav from '../components/Nav/Nav';
import AsideNav from '../components/AsideNav/AsideNav';
import LocationHours from '../components/LocationHours/LocationHours';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import '../UpcomingAppointment/Accordion.css'; 
import React, { useState, useEffect } from "react";



function UpcomingAppointment() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };
    
    return (
        <div >
            {<SearchBar />}
            {<Nav />}
            <article>
            {<AsideNav />}
            {<LocationHours />}
                {/* <div className = "breadcrumbs">
                    <a href="#">Home</a> / 
                    <a href="#">Advocacy & Resources</a> /
                    <a href="#">Upcoming Appointment</a>
                    <br />
                </div> */}

                <div className='apptContent'>
                    <h1>Upcoming Appointment</h1>

                    <h1>Create New Appointment</h1>
                    <div className="accordion-container">
                        <div className="accordion-header" onClick={toggleAccordion}>
                            <h3 className="accordion-title">View Appointments for Tuesday</h3>
                            <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
                        </div>
                        {isOpen && (
                            <div className="accordion-content">
                            <p className="accordion-text">content</p>
                            </div>
                        )}
                    </div>
                    <div className="accordion-container">
                        <div className="accordion-header" onClick={toggleAccordion2}>
                            <h3 className="accordion-title">View Appointments for Wednesday</h3>
                            <span className="accordion-icon">{isOpen2 ? '-' : '+'}</span>
                        </div>
                        {isOpen2 && (
                            <div className="accordion-content">
                            <p className="accordion-text">content</p>
                            </div>
                        )}
                    </div>
                    <div className="accordion-container">
                        <div className="accordion-header" onClick={toggleAccordion3}>
                            <h3 className="accordion-title">View Appointments for Thursday</h3>
                            <span className="accordion-icon">{isOpen3 ? '-' : '+'}</span>
                        </div>
                        {isOpen3 && (
                            <div className="accordion-content">
                            <p className="accordion-text">content</p>
                            </div>
                        )}
                    </div>
                </div>
            </article>
            {<Socials />}
            {<Footer />}


        </div>
    );
};

export default UpcomingAppointment;