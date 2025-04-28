import './AsideNav.css';

function AsideNav() {
    return (
        <div className = "left-side-nav">
            <a href="#">Get Help</a>
            <a href="#">Interpersonal Violence Prevention and Response</a>
            <a href="#">Emergency Resources</a>
            <a href="#">Food & Clothing Services</a>
            <a href="#" className="gray">Paws' Closet</a>
            <a href="#" className="gray red">Paws' Pantry</a>
            <a href="#">Refer to or Contact Student Advocacy</a>
        </div>
    );
};

export default AsideNav;