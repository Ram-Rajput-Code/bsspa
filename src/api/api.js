//src/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Home Slider APIs
export const getHomeSliderImages = async () => {
    const res = await axios.get(`${BASE_URL}/homeSlider`);
    return res.data;
};

export const uploadHomeSliderImage = async (formData) => {
    const res = await axios.post(`${BASE_URL}/homeSlider/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
};

export const updateHomeSliderImage = async (id, formData) => {
    const res = await axios.put(`${BASE_URL}/homeSlider/update/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
};

export const deleteHomeSliderImage = async (id) => {
    await axios.delete(`${BASE_URL}/homeSlider/${id}`);
};

// About Page Banner APIs
export const getBanners = async () => {
    const res = await axios.get(`${BASE_URL}/aboutPageBanner`);
    return res.data;
};

export const uploadBanner = async (formData) => {
    const res = await axios.post(`${BASE_URL}/aboutPageBanner/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
};

export const updateBanner = async (id, formData) => {
    const res = await axios.put(`${BASE_URL}/aboutPageBanner/update/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
};

export const deleteBanner = async (id) => {
    await axios.delete(`${BASE_URL}/aboutPageBanner/${id}`);
};
