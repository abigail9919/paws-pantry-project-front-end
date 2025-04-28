import './Footer.css';
import IUsig from '../../../images/iu-sig-formal.png';

function Footer() {
    return (
        <footer>
            <div className="footerFlex">
                <img src={IUsig} alt=""/>
                <div className="links">
                    <a href="#">Accessibility</a> |
                    <a href="#">Privacy Notice</a> |
                    <a href="#">Copyright © 2023 The Trustees of Indiana University</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;