import { useState, useEffect, useParams, useContext } from 'react';

import axios from 'axios';

import StudentsList from '../../components/roster/studentsList';
import useStudentsListFetcher from '../../hook/roster/students';

import { APIURLContext } from '../../context/APIURLContext';

function Students() {
    const apiURL = useContext(APIURLContext);
    // const { _id } = useParams();
    const [isLoading, error, dataStudents] = useStudentsListFetcher(apiURL + '/students');
    console.log(apiURL);
    console.log(`This is the students data: ${dataStudents}`);


    return  (
        <div>
            <div >
                {isLoading ? 
                    (
                        <span className='loading'>
                            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            </div>
                        </span>
                    )
                    : 
                (
                    <div>
                        <StudentsList 
                        allStudents={dataStudents} 
                        studentID={dataStudents.studentID} 
                        firstName={dataStudents.firstName} 
                        lastName={dataStudents.lastName}
                        email={dataStudents.email}
                    />
                    </div>
                )}
            </div>
        </div>
    )

}

export default Students;