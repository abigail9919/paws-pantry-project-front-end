import '../roster.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function StudentsData ({studentID, firstName, lastName, email}){
    return(
        <div className="card">
            <td>
                {studentID}
            </td>
        </div>

    )
}

export default StudentsData;