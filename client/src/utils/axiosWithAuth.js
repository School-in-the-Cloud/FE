import axios from 'axios';


export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');
    return axios.create({
        baseURL: 'https://school-in-the-cloud.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}