import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-852ec.firebaseio.com/'
});

export default instance;