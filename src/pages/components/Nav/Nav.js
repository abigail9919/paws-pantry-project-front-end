import './Nav.css';

function Nav() {
    return (
        <div>
            <header className="student-affairs-header">Division of <b>Student Affairs</b></header>
            <nav>
                <a href="#">Get Involved</a>
                <a href="#">Campus Center</a>
                <a href="#">Health & Wellness</a>
                <a href="#">Housing</a>
                <a href="#" className = "red-bottom">Advocacy & Resources</a>
                <a href="#">Student Conduct</a>
            </nav>
        </div>
    );
};

export default Nav;