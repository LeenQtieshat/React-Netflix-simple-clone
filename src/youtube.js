import axios from 'axios';
const KEY = 'AIzaSyCpEAT95uDkvjjzjFtRs0kOe9xDy8VKlL0'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})