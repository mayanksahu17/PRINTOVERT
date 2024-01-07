import axios from 'axios'
import { login , logout } from '../store/authSlice'

const login =( email, username , password)=>{

const logindata = {
    email : email,
    username  : username ,
    password : password
}
axios.post("/login")
.then((response)=>{})
}

