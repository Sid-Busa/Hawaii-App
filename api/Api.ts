import axios from 'axios';

const API = axios.create({
	baseURL: 'https://web-dev.dev.kimo.ai/v1/',
});

const requestHandler = (request: any) => {
	return request;
};

const responseHandler = (response: any) => {
	return response.data;
};

const errorHandler = (error: any) => {	
	return Promise.reject(error);
};

API.interceptors.request.use(
	(request) => requestHandler(request),
	(error) => errorHandler(error)
);

API.interceptors.response.use(
	(response) => responseHandler(response),
	(error) => errorHandler(error)
);

export default API;
