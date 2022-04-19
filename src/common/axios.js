import axios from 'axios';

const ax = axios.create({
	baseURL: 'http://localhost:8080'
});

if (localStorage.getItem('token')) {
	ax.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}

export default ax;
