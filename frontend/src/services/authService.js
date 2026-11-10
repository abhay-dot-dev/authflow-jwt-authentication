import axios from 'axios'

const API_URL = 'http://localhost:3000';

export const registerUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/register`, {
        email, password
    });

    return response.data;
}

export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        email, password
    });

    return response.data;
}

export const productData = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/products`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    });

    return response.data;
}