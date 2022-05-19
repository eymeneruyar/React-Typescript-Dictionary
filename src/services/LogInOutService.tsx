import axios from "axios";
import { } from "./Util";

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    auth:{
        username: process.env.REACT_APP_GLOBAL_USERNAME!,
        password: process.env.REACT_APP_GLOBAL_PASSWORD!
    }
})

// user and admin 
export const userAndAdminLogin = ( email:string, password: string ) => {
    
    const conf = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        auth: {
            username: email,
            password: password
        }
    })
    const params = {
        email: email
    }
    return conf.post("api/login", {} , {params: params})
}

// user and admin logout
export const logout = () => {
    return axiosConfig.get("api/logout");
}