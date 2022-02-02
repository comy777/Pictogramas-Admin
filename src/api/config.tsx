import axios from 'axios';

export const cloudinary = axios.create({
  baseURL: '`https://api.cloudinary.com/v1_1/`',
});
