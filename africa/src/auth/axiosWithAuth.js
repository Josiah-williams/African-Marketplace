import axios from 'axios';

export const axiosWithAuth =() => {
    return axios.create({
        baseURL: " https://lbs-african-marketplace.herokuapp.com",
        headers: {
            Authorization:localStorage.getItem('token')
        }
    });
}; 

export default axios