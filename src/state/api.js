import Axios from "axios"

const instance = Axios.create({ baseURL: 'https://api.covid19api.com/' })

const API = {
    getSummary() {
        return instance.get('summary').then(response => response.data)
    }
}

export default API