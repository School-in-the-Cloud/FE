import axios from 'axios';

const token = sessionStorage.getItem('token');

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://school-in-the-cloud.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    })
}