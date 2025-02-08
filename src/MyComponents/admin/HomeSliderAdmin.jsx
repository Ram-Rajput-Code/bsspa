//src/MyComponents/admin/HomeSliderAdmin.jsx
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { getImages, uploadImage, updateImage, deleteImage } from "../../api/api";
import { 
    getHomeSliderImages, 
    uploadHomeSliderImage, 
    updateHomeSliderImage, 
    deleteHomeSliderImage 
  } from "../../api/api";
  

const HomeSliderAdmin = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      const data = await getHomeSliderImages();
      setImages(data);
    };
    fetchImages();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // Upload new image
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const newImage = await uploadHomeSliderImage(formData);
      setImages([...images, newImage]);
      setSelectedFile(null);
      setPreview(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Update an image
  const handleUpdate = async (id) => {
    if (!selectedFile) {
      alert("Please select a file to update.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const updatedImage = await updateHomeSliderImage(id, formData);
      setImages(images.map(img => img.id === id ? updatedImage : img));
      setSelectedFile(null);
      setPreview(null);
      setEditingId(null);
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  // Delete an image
  const handleDelete = async (id) => {
    try {
      await deleteHomeSliderImage(id);
      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Manage Home Slider</Typography>

      {/* Upload Section */}
      <Box sx={{ marginBottom: "20px" }}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {preview && <img src={preview} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}
        <Button variant="contained" color="primary" onClick={handleUpload} sx={{ marginTop: "10px" }}>
          Upload Image
        </Button>
      </Box>

      {/* Images List */}
      <Box>
        {images.length === 0 ? (
          <Typography>No images uploaded.</Typography>
        ) : (
          images.map((image) => (
            <Box key={image.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
              <img src={`http://localhost:5000/uploads/${image.image}`} alt="Slider" width="100px" />
              <Button variant="contained" color="error" onClick={() => handleDelete(image.id)}>Delete</Button>
              <Button variant="contained" color="secondary" onClick={() => setEditingId(image.id)}>Edit</Button>
              {editingId === image.id && (
                <Box>
                  <input type="file" onChange={handleFileChange} accept="image/*" />
                  <Button variant="contained" color="success" onClick={() => handleUpdate(image.id)}>Update</Button>
                </Box>
              )}
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default HomeSliderAdmin;
