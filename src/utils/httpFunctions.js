import axios from "axios";

const baseURL = "http://localhost:8080/";


export const httpGet = async (endpoint) => {
    return axios.get(baseURL + endpoint).then((res) => {
        return res.data;
    })
}

export const httpPost = async (endpoint, data) => {
    return axios.post(baseURL + endpoint, data, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'contentType': 'application/json',
            'dataType': 'json'
        }}).then((res) => {
        return res.data;
    })
}

export const httpDelete = async (endpoint) => {
    return axios.delete(baseURL + endpoint).then((res) => {
        return res.data;
    })
}

export const httpPut = async (endpoint, data) => {
    return axios.put(baseURL + endpoint, data).then((res) => {
        return res.data;
    })
}