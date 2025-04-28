import { useState, useEffect } from 'react';
import axios from 'axios';

function useStudentsListFetcher(dataSource){
    // Set up initial state of state variables
    const [isLoading, setIsLoading] = useState(false);
    const [dataStudents, setCampaigns] = useState([]);
    const [error, setError] = useState('');

    useEffect( () => {
    
        const loadCampaigns = async () => {
            try {
                const apiResponse = await axios.get(dataSource);
                setCampaigns((dataStudents) => [...apiResponse.data]);
            }
            catch (error) {
                console.log("Unable to fetch students data");
            }
            finally {
                setIsLoading(false);
            }
        };

        // Call the function we defined
        setIsLoading(true);
        loadCampaigns();
    }, []);

    return [isLoading, error, dataStudents];
}

export default useStudentsListFetcher;