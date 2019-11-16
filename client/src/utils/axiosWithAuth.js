import axios from 'axios';

const token = sessionStorage.getItem('token');

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: '',
        headers: {
            Authorization: token
        }
    })
}