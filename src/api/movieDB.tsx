/* eslint-disable prettier/prettier */
import axios from 'axios';
const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '3095795cae8e3f3e92f17cec4fb583d5',
        language: 'es-ES',
    },
});

export default movieDB;


