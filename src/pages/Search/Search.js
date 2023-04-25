import './Search.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Nav from '../components/Nav/Nav';
import AsideNav from '../components/AsideNav/AsideNav';
import LocationHours from '../components/LocationHours/LocationHours';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        // extract form values from formData object
        const clientID = formData.get('clientID');
        const firstName = formData.get('firstName');
      
        axios.get( `http://localhost:8000/api/v1/clients/${clientID}/${firstName}`, {

        })
        .then((response) => {
          console.log(response.data[0]);
        })
        .catch((error) => {
          alert("There was an issues getting client data");
          console.log(error.response.data.message);
          setErrorMessage(error.response.data.message);
        });
    };

    return (
        <div className = "search-page-wrapper">
            {<SearchBar />}
            {<Nav />}
            <article className="searchArticle">
            {<AsideNav />}
            {<LocationHours />}
                <div className = "breadcrumbs">
                    <a href="#">Home</a> / 
                    <a href="#">Advocacy & Resources</a> /
                    <a href="#">Appointment Search</a>
                    <br />
                </div>

                <h1 className='searchTitle'>Appointment Search</h1>
                <h2 className='searchText'>Have You Visited the Pantry Already? Find Your Information Here!</h2>

                <form id="student-search" onSubmit={handleSubmit}>
                    <label>IU ID Number: </label>
                    <br></br>
                    <input type="text" id="student-id" name="clientID" size="20" required minLength="10" placeholder='200*******' aria-label='Enter IU ID Number'></input><br/><br/>
                    <br></br>
                    <label>First Name: </label>
                    <br></br>
                    <input type="text" id="studentName" name="firstName" size="20" required minLength="1" placeholder='First Name' aria-label='Enter Name'></input><br/><br/>
                    {/* {<Button title="Search" type='submit' location="/UpcomingAppointment"/>} */}
                    <button type="submit">Search</button>
                    <br></br>
                    <br></br>
                    <h2 className='searchText'>If You're Visiting the Pantry for the First Time, Please Start a New Application Here.</h2>
                    {<Button title="Start New Application" location="/Forms"/>}
                </form>
            </article>
            {<Socials />}
            {<Footer />}


        </div>
    );
};

export default Search;