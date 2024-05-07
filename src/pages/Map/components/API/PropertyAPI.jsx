import axios from 'axios';

export const getPlacesData = async () => {
    try {
        const response = await axios.get('http://localhost:8000/userAuth/locations/');
        return response.data;
    } catch (error) {
        console.error('Error fetching places:', error);
        throw error; 
    }
};
