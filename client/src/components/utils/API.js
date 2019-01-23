import axios from 'axios';

export default {
    getData: query => axios.get('/api/' + query)
}