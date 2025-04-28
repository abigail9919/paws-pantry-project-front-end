import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
    if (props.to) {
        return (
            <Link to={props.to} className="button">
                <b>{props.title}</b>
            </Link>
        );
    }
    if (props.location) {
        return (
            <a href={props.location} className="button">
                <b>{props.title}</b>
            </a>
        );
    }
    return (
        <button className="button">
            <b>{props.title}</b>
        </button>
    );
}

export default Button;
