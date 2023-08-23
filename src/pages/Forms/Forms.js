import './Forms.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Nav from '../components/Nav/Nav';
import AsideNav from '../components/AsideNav/AsideNav';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Forms() {
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [employment, setEmployment] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [standing, setStanding] = useState("");
    const [street_address, setStreetAddress] = useState("");
    const [Address_line_2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [zip_code, setZipCode] = useState("");
    const [state, setState] = useState("");
    const [county, setCounty] = useState("");
    const [numAdults, setNumAdults] = useState("");
    const [numChildren05, setNumChildren05] = useState("");
    const [numChildren618, setNumChildren618] = useState("");
    const [clientID, setClientID] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        // extract form values from formData object
        const clientID = formData.get('clientID');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const street_address = formData.get('street_address');
        const Address_line_2 = formData.get('Address_line_2');
        const city = formData.get('city');
        const employment = formData.get('employment');
        const standing = formData.get('standing');
        const zip_code = formData.get('zip_code');
        const state = formData.get('state');
        const county = formData.get('county');
        const numAdults = formData.get('numAdults');
        const numChildren05 = formData.get('numChildren05');
        const numChildren618 = formData.get('numChildren618');
      
        axios.post("http://localhost:8000/api/v1/clients/newclients", {
          clientID: clientID,
          firstName: firstName,
          lastName: lastName,
          email: email,
          standing: standing,
          street_address: street_address,
          Address_line_2: Address_line_2,
          city: city,
          zip_code: zip_code,
          state: state,
          county: county,
          numAdults: numAdults,
          numChildren05: numChildren05,
          numChildren618: numChildren618,
          employment: employment
        })
        .then((response) => {
          alert('New Client added successfully!');
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          alert("There was an issues creating new client");
          console.log(error.response.data.message);
          setErrorMessage(error.response.data.message);
        });
    };

    return (
        <div className='forms-home'>
            {<SearchBar />}
            {<Nav />}
            <article className='forms-article'>
            {<AsideNav />}

                <form id="paws-form" onSubmit={handleSubmit}>
                    <header><h1>Paws' Pantry Intake Form</h1></header>
                    <p>Fields marked with an asterisk (*) are required.</p>

                    {/* CURRENT ROLE */}
                    <label><b>Are you a current:*</b></label><br />
                    <input
                        type="radio"
                        id="student"
                        name="standing"
                        value="student"
                        data-validate="true"
                        required
                        onChange={() => setSelectedOption('student')}
                    />
                    <label htmlFor="student">Student</label><br />

                    <input
                        type="radio"
                        id="university-staff"
                        name="standing"
                        value="university-staff"
                        data-validate="true"
                        onChange={() => setSelectedOption('university-staff')}
                    />
                    <label htmlFor="university-staff">University Staff or Affiliate Employee</label><br />

                    <input
                        type="radio"
                        id="faculty"
                        name="standing"
                        value="faculty"
                        data-validate="true"
                        onChange={() => setSelectedOption('faculty')}
                    />
                    <label htmlFor="faculty">Faculty</label><br /><br />
                    <label htmlFor="faculty">Faculty</label><br /><br />


                    {/* NAME */}
                    <label><b>Name *</b></label><br />
                    <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        placeholder="First"
                        required
                        minLength="1"
                        maxLength="60"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            setFirstNameError(false);
                        }}
                    />                    
                    {firstNameError && <p className="error">Please enter a valid first name</p>}
                    <input type="text" id="last-name" name="lastName" placeholder="Last" required minLength="1" maxLength="60"></input>
                    <br /><br />

                    {/* UNIVERSITY ID NUMBER */}
                    <label><b>University ID Number *</b></label><br />
                    <input type="text" className="long" id="uni-id" name="clientID" required minLength="1" maxLength="60"></input>
                    <br /> <br />

                    {/* IUPUI EMAIL */}
                    <label><b>IUPUI Email Address *</b></label><br />
                    <input type="text" className="long" id="email" name="email" required minLength="1" maxLength="60"></input>
                    <br /><br />

                    {/* ADDRESS */}
                    <label><b>Address *</b></label><br />
                    <label className="little-label">Street Address</label><br />
                    <input type="text" className="long" id="street-address" name="street_address" required minLength="1" maxLength="200"></input>
                    <br />
                    
                    <label className="little-label">Address line 2</label><br />
                    <input type="text" className="long" id="street-address-2" name="Address_line_2" minLength="1" maxLength="200"></input>
                    <br />

                    <label className="little-label">City</label>
                    <label className="little-label label-positioning">State/Province/Region</label>
                    <br />
                    <input type="text" className="medium" id="city" name="city" required minLength="1" maxLength="200"></input>
                    <input type="text" className="medium" id="state" name="state" required minLength="1" maxLength="200"></input>
                    <br />

                    <label className="little-label">Postal/Zip Code</label>
                    <label className="little-label different-label-positioning">Country</label>
                    <br />
                    <input type="text" className="medium" id="postal" name="zip_code" required minLength="1" maxLength="60"></input>
                    <input type="text" className="medium" id="country" name="county" required minLength="1" maxLength="200"></input>
                    <br />

                    <h1>How many people are in your household?</h1>
                    <label><b>Number of Adults *</b></label><br />
                    <input type="text" className="long" id="num-adults" name="numAdults" required minLength="1" maxLength="60"></input>
                    <br /><br />

                    <label><b>Number of Children, 0-5 years old *</b></label><br />
                    <input type="text" className="long" id="num-children" name="numChildren05" required minLength="1" maxLength="60"></input>
                    <br /><br />

                    <label><b>Number of Children, 6-18 years old *</b></label><br />
                    <input type="text" className="long" id="num-older-children" name="numChildren618" required minLength="1" maxLength="60"></input>
                    <br /><br />

                    <div className="dots"></div>

                    <label><b>What is your employment status? *</b></label><br />
                    <input type="radio" id="full-time" name="employment" value="Full-time" checked={employment === 'Full-time'} onChange={() => setEmployment('Full-time')} />
                    <label htmlFor="full-time">Full time</label><br />
                    <input type="radio" id="part-time" name="employment" value="Part-time" checked={employment === 'Part-time'} onChange={() => setEmployment('Part-time')} />
                    <label htmlFor="part-time">Part time</label><br />
                    <input type="radio" id="unemployed" name="employment" value="Unemployed" checked={employment === 'Unemployed'} onChange={() => setEmployment('Unemployed')} />
                    <label htmlFor="unemployed">Unemployed</label><br />
                    <input type="radio" id="disabled" name="employment" value="Disabled" checked={employment === 'Disabled'} onChange={() => setEmployment('Disabled')} />
                    <label htmlFor="disabled">Disabled</label><br />
                    <br /><br />

                    <div className="dots"></div>
{/* 
                    <label><b>Current source of income/resources: click all that apply. This information will not affect your eligibility to use the pantry. *</b></label>
                    <input type="checkbox" id="income-source" name="income-source"></input> */}

                    <button type="submit">Save</button>
                    {errorMessage && <p classNameName="error">{errorMessage}</p>}
                </form>
            </article>
        </div>
    );
};

export default Forms;