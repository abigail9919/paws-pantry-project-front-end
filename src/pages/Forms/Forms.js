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

        setClientID(event.target.elements.clientID.value);
        setFirstName(event.target.elements.firstName.value);
        setLastName(event.target.elements.lastName.value);
        setEmail(event.target.elements.email.value);
        setStreetAddress(event.target.elements.street_address.value);
        setAddressLine2(event.target.elements.Address_line_2.value);
        setCity(event.target.elements.city.value);
        setEmployment(employment);
        setStanding(selectedOption);
        setZipCode(event.target.elements.zip_code.value);
        setState(event.target.elements.state.value);
        setCounty(event.target.elements.county.value);
        setNumAdults(event.target.elements.numAdults.value);
        setNumChildren05(event.target.elements.numChildren05.value);
        setNumChildren618(event.target.elements.numChildren618.value);

        if (!selectedOption) {
            alert('Please select one option.');
        } 
        else if (!employment){
            alert('Please select an employment status.');
        }
        else if (!firstName){
            setFirstNameError(true);
            return;
        }
        else {
            setFirstNameError(false);
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
        }

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
                    <label for="faculty">Faculty</label><br /><br />


                    {/* NAME */}
                    <label><b>Name *</b></label><br />
                    <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        placeholder="First"
                        size="5"
                        required
                        minlength="1"
                        maxlength="60"
                        pattern="^[A-Za-z]+\s[A-Za-z]+$"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            setFirstNameError(false);
                        }}
                    />                    
                    {firstNameError && <p className="error">Please enter a valid first name</p>}
                    <input type="text" id="last-name" name="lastName" placeholder="Last" size="10" required minlength="1" maxlength="60" pattern="^[A-Za-z]+\s[A-Za-z]+$"></input>
                    <br /><br />

                    {/* UNIVERSITY ID NUMBER */}
                    <label><b>University ID Number *</b></label><br />
                    <input type="text" class="long" id="uni-id" name="clientID" required minlength="1" maxlength="60"></input>
                    <br /> <br />

                    {/* IUPUI EMAIL */}
                    <label><b>IUPUI Email Address *</b></label><br />
                    <input type="text" class="long" id="email" name="email" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    {/* ADDRESS */}
                    <label><b>Address *</b></label><br />
                    <label class="little-label">Street Address</label><br />
                    <input type="text" class="long" id="street-address" name="street_address" required minlength="1" maxlength="60"></input>
                    <br />
                    
                    <label class="little-label">Address line 2</label><br />
                    <input type="text" class="long" id="street-address-2" name="Address_line_2" minlength="1" maxlength="60"></input>
                    <br />

                    <label class="little-label">City</label>
                    <label class="little-label label-positioning">State/Province/Region</label>
                    <br />
                    <input type="text" class="medium" id="city" name="city" required minlength="1" maxlength="60"></input>
                    <input type="text" class="medium" id="state" name="state" required minlength="1" maxlength="60"></input>
                    <br />

                    <label class="little-label">Postal/Zip Code</label>
                    <label class="little-label different-label-positioning">Country</label>
                    <br />
                    <input type="text" class="medium" id="postal" name="zip_code" required minlength="1" maxlength="60"></input>
                    <input type="text" class="medium" id="country" name="county" required minlength="1" maxlength="60"></input>
                    <br />

                    <h1>How many people are in your household?</h1>
                    <label><b>Number of Adults *</b></label><br />
                    <input type="text" class="long" id="num-adults" name="numAdults" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    <label><b>Number of Children, 0-5 years old *</b></label><br />
                    <input type="text" class="long" id="num-children" name="numChildren05" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    <label><b>Number of Children, 6-18 years old *</b></label><br />
                    <input type="text" class="long" id="num-older-children" name="numChildren618" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    <div class="dots"></div>

                    <label><b>What is your employment status? *</b></label><br />
                    <input type="radio" id="full-time" name="employment" value="full-time" checked={employment === 'full-time'} onChange={() => setEmployment('full-time')} />
                    <label htmlFor="full-time">Full time</label><br />
                    <input type="radio" id="part-time" name="employment" value="part-time" checked={employment === 'part-time'} onChange={() => setEmployment('part-time')} />
                    <label htmlFor="part-time">Part time</label><br />
                    <input type="radio" id="unemployed" name="employment" value="unemployed" checked={employment === 'unemployed'} onChange={() => setEmployment('unemployed')} />
                    <label htmlFor="unemployed">Unemployed</label><br />
                    <input type="radio" id="disabled" name="employment" value="disabled" checked={employment === 'disabled'} onChange={() => setEmployment('disabled')} />
                    <label htmlFor="disabled">Disabled</label><br />
                    <br /><br />

                    <div class="dots"></div>
{/* 
                    <label><b>Current source of income/resources: click all that apply. This information will not affect your eligibility to use the pantry. *</b></label>
                    <input type="checkbox" id="income-source" name="income-source"></input> */}

                    <button type="submit">Save</button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
            </article>
        </div>
    );
};

export default Forms;