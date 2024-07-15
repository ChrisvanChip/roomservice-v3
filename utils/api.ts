import axios, { isAxiosError } from 'axios';

const API_URL = 'https://roomserver.opdewolk.nl/'

export { isAxiosError };
export function get(url: string) {
    return axios.get(API_URL + url)
}
export function post(url: string, data: any) {
    return axios.post(API_URL + url, data)
}