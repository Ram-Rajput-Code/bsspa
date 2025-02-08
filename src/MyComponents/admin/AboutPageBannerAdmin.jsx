import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { getBanners, uploadBanner, updateBanner, deleteBanner } from "../../api/api";

const AboutPageBannerAdmin = () => {
  const [banners, setBanners] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch banners from the backend
  useEffect(() => {
    const fetchBanners = async () => {
      const data = await getBanners();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // Upload new banner
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const newBanner = await uploadBanner(formData);
      setBanners([...banners, newBanner]);
      setSelectedFile(null);
      setPreview(null);
    } catch (error) {
      console.error("Error uploading banner:", error);
    }
  };

  // Update a banner
  const handleUpdate = async (id) => {
    if (!selectedFile) {
      alert("Please select a file to update.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const updatedBanner = await updateBanner(id, formData);
      setBanners(banners.map(b => b.id === id ? updatedBanner : b));
      setSelectedFile(null);
      setPreview(null);
      setEditingId(null);
    } catch (error) {
      console.error("Error updating banner:", error);
    }
  };

  // Delete a banner
  const handleDelete = async (id) => {
    try {
      await deleteBanner(id);
      setBanners(banners.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: "800px", margin: "auto", textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Manage About Page Banners</Typography>

      <Box>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {preview && <img src={preview} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}
        <Button variant="contained" color="primary" onClick={handleUpload}>Upload</Button>
      </Box>

      {banners.map((b) => (
        <Box key={b.id}>
          <img src={`http://localhost:5000/uploads/${b.image}`} alt="Banner" width="100px" />
          <Button color="error" onClick={() => handleDelete(b.id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
};

export default AboutPageBannerAdmin;
