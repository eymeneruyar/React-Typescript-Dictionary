import axios from "axios"

export const login = (creds:any) => {
    return axios.post('api/auth',{},{auth: creds});
}