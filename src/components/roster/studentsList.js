import react from 'react';
import StudentsData from './studentsData/students';
import './roster.css'

const StudentsList = ({allStudents, studentID, firstName, lastName, email}) => {
    return(
        <div className='row'>
            <h1 className='campListH1'>Saved Students</h1>
            <table id="customers">
            <tr>
                <th>Student ID</th>
                <th>first Name</th>
                <th>last Name</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>                
                    {allStudents.map ((items) => <StudentsData key={items._id} {...items}/>)}
                </td>
                <td>                
                    {allStudents.map ((items) => <StudentsData key={items._id} {...items}/>)}
                </td>
                <td>                
                    {allStudents.map ((items) => <StudentsData key={items._id} {...items}/>)}
                </td>
                <td>                
                    {allStudents.map ((items) => <StudentsData key={items._id} {...items}/>)}
                </td>
                {/* <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td> */}
            </tr>

            </table>
        </div>
    )
}

export default StudentsList;