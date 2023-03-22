import './SearchBar.css';
import IUPUILogo from '../../../images/IUPUILogo.jpg';
import search from '../../../images/search.png';

function Nav() {
    return (
        <div>
            <div className = "search-bar">
                <img className="IU-logo" src={IUPUILogo} alt="IUPUI Logo"/>
                <div className = "nav-wrapper">
                    <a href="#">News</a>
                    <a href="#">Events</a>
                    <a href="#">About & Contact</a>
                    <a href="#"><img src={search}/></a>
                </div> 
            </div>
        </div>
    );
};

export default Nav;