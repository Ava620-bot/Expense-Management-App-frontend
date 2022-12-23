import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://amazon-backend-app-2.herokuapp.com',
    // baseURL:'http://localhost:3000/',
    baseURL:'https://expense-management-app-api.onrender.com/api/v1',

});

export default instance;
