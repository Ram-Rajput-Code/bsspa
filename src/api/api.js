//src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/homeSlider';

export const getImages = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const uploadImage = async (formData) => {
    const res = await axios.post(`${API_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
};

export const updateImage = async (id, formData) => {
    const res = await axios.put(`${API_URL}/update/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
};

export const deleteImage = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
