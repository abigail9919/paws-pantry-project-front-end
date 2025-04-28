import '../roster.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function StudentsDataFirstName ({studentID, firstName, lastName, email}){
    return(
        <div className="card">
            <td>
                {firstName}
            </td>
        </div>

    )
}

export default StudentsDataFirstName;