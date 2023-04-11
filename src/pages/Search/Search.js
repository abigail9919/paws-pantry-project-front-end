import './Search.css';
import AsideNav from '../components/AsideNav/AsideNav';
import LocationHours from '../components/LocationHours/LocationHours';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

function Search() {
    return (
        <div className = "search-page-wrapper">
            <article>
                <div className = "breadcrumbs">
                    <a href="#">Home</a> / 
                    <a href="#">Advocacy & Resources</a> /
                    <a href="#">Appointment Search</a>
                    <br />
                </div>

                {<AsideNav />}
                {<LocationHours />}

                <h1>Appointment Search</h1>

                <form id="student-search" action="#" method="get">
                    <label for="student-id">Student ID #: </label>
                    <input type="text" id="student-id" name="student-id" size="20" required minlength="10"></input><br/><br/>
                    {<Button title="Search" location="/Forms"/>}
                </form>

            </article>

            {<Socials />}
            {<Footer />}

        </div>
    );
};

export default Search;