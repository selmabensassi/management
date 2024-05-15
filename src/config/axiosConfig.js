import axios from 'axios';

const baseUrl = 'http://localhost:8000';

export const baseURL = baseUrl;

const axiosInstance = axios.create({
	baseURL: baseUrl,
	timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response) {
			// error.response.data = error.response.data.errors[0].message;
			// console.error('Response error:', error.response.status, error.response.data);
			if (error.response.data.message) {
				return Promise.reject(error.response.data.message);
			}
			return Promise.reject(error.response.data.errors[0].message);
		}
		// else if (error.request) {
		// 	// The request was made but no response was received
		// 	console.error('Request error:', error.request);
		// } else {
		// 	// Something happened in setting up the request that triggered an Error
		// 	console.error('Error:', error.message);
		// }

		return Promise.reject(error);
	},
);

export default axiosInstance;
