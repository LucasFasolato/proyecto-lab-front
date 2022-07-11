import axios from "axios";

const baseURL = "http://localhost:8080/";


export const httpGet = async (endpoint) => {
    return axios.get(baseURL + endpoint).then((res) => {
        return res.data;
    })
}

export const login = async (username, password) => {
        return axios.get(baseURL + "users", {
            headers: {
                authorization: `Basic ${window.btoa(username + ":" + password)}`
            }
        }).then((res) => {
            localStorage.setItem('user', window.btoa(username + ":" + password));
            return res.data;
        })
}

// Basic auth no tiene una manera de desdloguear, sino que pones credenciales invalidas y lsito
export const logout = () => {
    login("logout","logout");
    localStorage.clear();


}

export const httpPost = async (endpoint, data) => {
    return axios.post(baseURL + endpoint, data, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'contentType': 'application/json',
            'dataType': 'json'
        }
    }).then((res) => {
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
