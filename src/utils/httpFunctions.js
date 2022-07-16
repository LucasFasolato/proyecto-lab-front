import axios from "axios";

const baseURL = "https://peaceful-harbor-44195.herokuapp.com/";
// const baseURL = "http://localhost:8080/";


export const httpGet = async (endpoint) => {
    return axios.get(baseURL + endpoint, {
        headers: {
            authorization: `Basic ${localStorage.getItem('user')}`
        }
    }).then((res) => {
        return res.data;
    })
}

export const login = async (username, password) => {
    try {
        return await axios.get(baseURL + "auth/login", {
            headers: {
                authorization: `Basic ${window.btoa(username + ":" + password)}`
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

export const httpPost = async (endpoint, data, register = false) => {
    try {
        const configRegistro = {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'access-Control-Allow-Origin' : '*',
                'content-Type': 'application/json',
                'dataType': 'json',
            }
        }
        const configLogueado = {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'access-Control-Allow-Origin' : '*',
                'content-Type': 'application/json',
                'dataType': 'json',
                authorization: `Basic ${localStorage.getItem('user')}`
            }
        }
        if (register) {
            return await axios.post(baseURL + endpoint, data, configRegistro)

        } else {
            return await axios.post(baseURL + endpoint, data, configLogueado);
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
    return axios.put(baseURL + endpoint, data).then((res) => {
        return res.data;
    })
}
