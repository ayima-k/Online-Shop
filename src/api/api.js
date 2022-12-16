import axios from 'axios'

export const getRegister = (data) => axios.post('users/user/', data)
