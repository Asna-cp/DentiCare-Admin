import axios from 'axios';

const PORT = process.env.REACT_APP_PORT

export const allpatients =()=> axios.get(`${PORT}/allpatients`)



