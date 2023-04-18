import './Search.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Nav from '../components/Nav/Nav';
import AsideNav from '../components/AsideNav/AsideNav';
import LocationHours from '../components/LocationHours/LocationHours';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

function Search() {
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

                <h1>Appointment Search</h1>

                <form id="student-search" action="#" method="get">
                    <label>Student ID #: </label>
                    <input type="text" id="student-id" name="student-id" size="20" required minlength="10" placeholder='200*******' aria-label='Enter student ID Number'></input><br/><br/>
                    {<Button title="Search" location="/Forms"/>}
                </form>
            </article>
            {<Socials />}
            {<Footer />}


        </div>
    );
};

export default Search;