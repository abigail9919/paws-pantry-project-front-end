import './Socials.css';
import twitter from '../../../images/twitter.png';
import instagram from '../../../images/instagram.png';
import youtube from '../../../images/youtube.png';

function Socials() {
    return (
        <div className="social-links">
            <h5>INTRANET</h5>
            <div className="socialFlex">
                <img src={twitter} alt="twitter icon"/>
                <img src={instagram} alt="instagram icon"/>
                <img src={youtube} alt="youtube icon"/>
                </div>
            </div>
    );
};

export default Socials;