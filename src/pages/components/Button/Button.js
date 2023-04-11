import './Button.css';

function Button(props) {
    return (
        <button onClick={event =>  window.location.href=props.location}><b>{props.title}</b></button>
    );
};

export default Button;