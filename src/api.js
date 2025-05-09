import axios from 'axios'

const api = axios.create({
    // baseURL : "http://localhost:3000/"
    baseURL : "https://curly-spork-pjrrp4jwj9r936vg-3000.app.github.dev/"
})

export const login = (props) => {
    
    return api.post('login' , props);

}

export const sendOTP = (email) => {

    return api.post(`sendotp`,{
        email: email
    });

}

export const signUp = (props) => {  

    return api.post(`signup` , props);

}       