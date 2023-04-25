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
import { Routes, Route, useParams, useHref } from 'react-router-dom';
import axios from "axios";

function UpcomingAppointment() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [clients, setClient] = useState();
    const [appointments, setAppointments] = useState([]);
    const [timeslots, setTimeslot] = useState([]);
    const [timeslotsbyDay, setTimeslotbyDay] = useState();
    const [timeslotsbyDayWed, setTimeslotbyDayWed] = useState();
    const [timeslotsbyDayThur, setTimeslotbyDayThur] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const { clientID } = useParams();
    const { firstName } = useParams();


    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };

    const handleCreateAppointment = (timeID) => {
        // console.log(timeID)
        if (window.confirm('Are you sure you want to create a new appointment?')) {
            axios.post("http://localhost:8000/api/v1/appointments/newAppointments", {
                    clientID: clientID,
                    timeSlotID: timeID,
                })
            .then((response) => {
                alert('New appointment added successfully!');
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                alert("There was an issues creating appointment");
                console.log(error.response.data.message);
                setErrorMessage(error.response.data.message);
            });
        }
    };

    // const getAppts = () => {
    //     axios.get(`http://localhost:8000/api/v1/appointments/findAppointments/${clientID}`)
    //       .then(res => {
    //         setAppointments(res.data);
    //         const appointmentIDs = res.data.map(appointment => appointment.timeSlotID);
    //         getApptData(appointmentIDs);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    // };
        
    //   useEffect(() => {
    //     getAppts();
    //   }, []);
      
    useEffect(() => {
        const getApptData = async (appointmentIDs) => {
          if (appointmentIDs.length > 0) {
            try {
              const apiRequests = appointmentIDs.map(element => {
                return axios.get(`http://localhost:8000/api/v1/timeslots/findTimeslots/${element}`);
              });
      
              const responses = await Promise.all(apiRequests);
              const timeslotsData = responses.map(res => res.data);
              setTimeslot(timeslotsData);
            } catch (err) {
              console.log(err);
            }
          }
        };
      
        const getAppts = () => {
          axios.get(`http://localhost:8000/api/v1/appointments/findAppointments/${clientID}`)
            .then(res => {
              setAppointments(...res.data);
              console.log(...res.data)
              const appointmentIDs = res.data.map(appointment => appointment.timeSlotID);
              getApptData(appointmentIDs);
            })
            .catch(err => {
              console.log(err);
            });
        };
        
        getAppts();
        console.log(...timeslots)
      }, []);
      


    useEffect(() => {
        const getUser= () => {
            axios.get(`http://localhost:8000/api/v1/clients/${clientID}/${firstName}`)
            .then(res => {
              setClient(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        };
        getUser();

        const getTimeslotsbyDay = () => {
            axios.get(`http://localhost:8000/api/v1/timeslots/tuesday`)
            .then(res => {
                setTimeslotbyDay(res.data);
            })
              .catch(err => {
                console.log(err);
            });
        };
        getTimeslotsbyDay();

        const getTimeslotsbyDayWed = () => {
            axios.get(`http://localhost:8000/api/v1/timeslots/Wednesday`)
            .then(res => {
                setTimeslotbyDayWed(res.data);
            })
              .catch(err => {
                console.log(err);
            });
        };
        getTimeslotsbyDayWed();

        const getTimeslotsbyDayThur = () => {
            axios.get(`http://localhost:8000/api/v1/timeslots/Thursday`)
            .then(res => {
                setTimeslotbyDayThur(res.data);
            })
              .catch(err => {
                console.log(err);
            });
        };
        getTimeslotsbyDayThur();
        // console.log(timeslotsbyDayThur)
    }, 
    []);
    
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
                    <table className="time-slot-table">
                        <thead>
                            <tr>
                            <th>Day</th>
                            <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeslots.map(timeslot => (
                            <tr key={timeslot.timeSlotID}>
                                <td>{timeslot.day}</td>
                                <td>{timeslot.time}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                    <h1>Create New Appointment</h1>
                    <div className="accordion-container">
                        <div className="accordion-header" onClick={toggleAccordion}>
                            <h3 className="accordion-title">View Appointments for Tuesday</h3>
                            <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
                        </div>
                        {isOpen && (
                            <div className="accordion-content">
                                <table className="time-slot-table">
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Time</th>
                                            <th>Availability</th>
                                            <th>Create Appointment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {timeslotsbyDay.map((timeSlot) => (
                                        <tr key={timeSlot.timeSlotID}>
                                            <td>{timeSlot.day}</td>
                                            <td>{timeSlot.time}</td>
                                            <td>{timeSlot.filled ? 'Unavailable' : 'Available'}</td>
                                            <td>
                                                {timeSlot.filled ? (
                                                    <button disabled>No Appointment</button>
                                                ) : (
                                                    <button onClick={() => handleCreateAppointment(timeSlot.timeSlotID)}>
                                                        Create
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
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
                                <table className="time-slot-table">
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Time</th>
                                            <th>Availability</th>
                                            <th>Create Appointment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {timeslotsbyDayWed.map((timeSlot) => (
                                        <tr key={timeSlot.timeSlotID}>
                                            <td>{timeSlot.day}</td>
                                            <td>{timeSlot.time}</td>
                                            <td>{timeSlot.filled ? 'Unavailable' : 'Available'}</td>
                                            <td>
                                                {timeSlot.filled ? (
                                                    <button disabled>No Appointment</button>
                                                ) : (
                                                    <button onClick={() => handleCreateAppointment(timeSlot.timeSlotID)}>
                                                        Create
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
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
                                  <table className="time-slot-table">
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Time</th>
                                            <th>Availability</th>
                                            <th>Create Appointment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {timeslotsbyDayThur.map((timeSlot) => (
                                        <tr key={timeSlot.timeSlotID}>
                                            <td>{timeSlot.day}</td>
                                            <td>{timeSlot.time}</td>
                                            <td>{timeSlot.filled ? 'Unavailable' : 'Available'}</td>
                                            <td>
                                                {timeSlot.filled ? (
                                                    <button disabled>No Appointment</button>
                                                ) : (
                                                    <button onClick={() => handleCreateAppointment(timeSlot.timeSlotID)}>
                                                        Create
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
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