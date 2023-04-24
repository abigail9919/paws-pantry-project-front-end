// import './Search.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Nav from '../components/Nav/Nav';
import AsideNav from '../components/AsideNav/AsideNav';
import LocationHours from '../components/LocationHours/LocationHours';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

function UpcomingAppointment() {
    return (
        <div >
            {<SearchBar />}
            {<Nav />}
            <article>
            {<AsideNav />}
            {<LocationHours />}
                <div className = "breadcrumbs">
                    <a href="#">Home</a> / 
                    <a href="#">Advocacy & Resources</a> /
                    <a href="#">Upcoming Appointment</a>
                    <br />
                </div>

                <h1>Upcoming Appointment</h1>

                <form id="student-search" action="#" method="get">
                    {<Button title="Edit Appointment" location="/Forms"/>}
                    
                </form>
            </article>
            {<Socials />}
            {<Footer />}


        </div>
    );
};

export default UpcomingAppointment;