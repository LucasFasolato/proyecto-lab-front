import axios from "axios";

// const baseURL = "https://peaceful-harbor-44195.herokuapp.com/";
const baseURL = "http://168.138.228.14:8080/api/";

// const baseURL = "http://localhost:8080/";


export const httpGet = async (endpoint, auth = true) => {
    if (auth) {
        let token = localStorage.getItem('ba_token');
        return axios.get(baseURL + endpoint, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => {
            return res.data;
        })
    } else {
        return axios.get(baseURL + endpoint).then((res) => {
            return res.data;
        })
    }

}

export const login = async (username, password) => {
    try {
        return await axios.get(baseURL + "auth/login", {
            headers: {
                authorization: `Bearer ${window.btoa(username + ":" + password)}`
            }
        })
    } catch (err) {
        return err;
    }
}

// Basic auth no tiene una manera de desdloguear, sino que pones credenciales invalidas y lsito
export const logout = () => {
    return axios.get(baseURL + "users", {
        headers: {
            authorization: `Basic ${window.btoa("a" + ":" + "a")}`
        }
    }).then((res) => {
        localStorage.clear();
    })
}

export const httpPost = async (endpoint, data, auth = true) => {
    try {
        if (auth) {
            let token = localStorage.getItem('ba_token');
            const config = {
                headers: {
                    // Overwrite Axios's automatically set Content-Type
                    'access-Control-Allow-Origin': '*',
                    'content-Type': 'application/json',
                    'dataType': 'json',
                    authorization: `Basic ${token}`
                }
            }
            return await axios.post(baseURL + endpoint, data, config)
        } else {
            const config = {
                headers: {
                    // Overwrite Axios's automatically set Content-Type
                    'access-Control-Allow-Origin': '*',
                    'content-Type': 'application/json',
                    'dataType': 'json',
                }
            }
            return await axios.post(baseURL + endpoint, data, config);

        }

    } catch (err) {
        return err;
    }
}

export const httpDelete = async (endpoint) => {
    return axios.delete(baseURL + endpoint).then((res) => {
        return res.data;
    })
}

export const httpPut = async (endpoint, data) => {
    return axios.put(baseURL + endpoint, data, {
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'access-Control-Allow-Origin': '*',
            'content-Type': 'application/json',
            'dataType': 'json',
            authorization: `Basic ${localStorage.getItem('user')}`
        }
    }).then((res) => {
        return res.data;
    })
}
