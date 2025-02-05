import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";

const RegForm10and12 = () => {
  const [formData, setFormData] = useState({
    candidateName: "",
    motherName: "",
    fatherName: "",
    gender: "",
    cast: "",
    religion: "",
    subjects: ["", "", "", ""],
    annualIncome: "",
    dateOfBirth: "",
    admissionSerialNo: "",
    dateOfAdmission: "",
    minority: "",
    aadharNo: "",
    bankAccNo: "",
    ifscCode: "",
    bankName: "",
    mathOption: "",
    contactDetails: {
      studentMobile: "",
      studentEmail: "",
      fatherMobile: "",
      fatherEmail: "",
      motherMobile: "",
      motherEmail: "",
      guardianMobile: "",
      guardianEmail: "",
    },
    occupation: {
      fatherOccupation: "",
      motherOccupation: "",
      guardianOccupation: "",
    },
    siblings: [
      { name: "", class: "" },
      { name: "", class: "" },
      { name: "", class: "" },
    ],
    documents: {
      marksheet: null,
      casteCertificate: null,
      photo: null,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("contactDetails")) {
      const contactKey = name.split(".")[1];
      setFormData({
        ...formData,
        contactDetails: { ...formData.contactDetails, [contactKey]: value },
      });
    } else if (name.startsWith("occupation")) {
      const occupationKey = name.split(".")[1];
      setFormData({
        ...formData,
        occupation: { ...formData.occupation, [occupationKey]: value },
      });
    } else if (name.startsWith("siblings")) {
      const siblingIndex = name.split(".")[1];
      const siblingKey = name.split(".")[2];
      const newSiblings = [...formData.siblings];
      newSiblings[siblingIndex][siblingKey] = value;
      setFormData({
        ...formData,
        siblings: newSiblings,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubjectChange = (index, value) => {
    const newSubjects = [...formData.subjects];
    newSubjects[index] = value;
    setFormData({ ...formData, subjects: newSubjects });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      documents: { ...formData.documents, [name]: files[0] },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement form validation and submission logic.
    alert("Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center">CBSE Registration Form sample 10 and 12</h1>

      <Grid
        container
        spacing={3}
        style={{ marginTop: "10px", marginBottom: "10px", padding: "20px" }}
      >
        {/* Candidate Details */}
        <Grid item xs={12} sm={4}>
          <TextField
            label="Candidate's Name"
            fullWidth
            value={formData.candidateName}
            name="candidateName"
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Mother's Name"
            fullWidth
            value={formData.motherName}
            name="motherName"
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Father's Name"
            fullWidth
            value={formData.fatherName}
            name="fatherName"
            onChange={handleInputChange}
            required
          />
        </Grid>

        {/* Gender and Cast */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={formData.gender}
              name="gender"
              onChange={handleInputChange}
              required
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Cast</InputLabel>
            <Select
              value={formData.cast}
              name="cast"
              onChange={handleInputChange}
              required
            >
              <MenuItem value="GEN">GEN</MenuItem>
              <MenuItem value="SC">SC</MenuItem>
              <MenuItem value="ST">ST</MenuItem>
              <MenuItem value="OBC">OBC</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Subject Selection */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Mathematics Option</InputLabel>
            <Select
              value={formData.mathOption}
              name="mathOption"
              onChange={handleInputChange}
              required
            >
              <MenuItem value="Basic">Mathematics Basic</MenuItem>
              <MenuItem value="Advance">Mathematics Advance</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Additional Subjects */}
        {["subject1", "subject2", "subject3", "subject4"].map(
          (subject, index) => (
            <Grid item xs={12} sm={4} key={subject}>
              <TextField
                label={`Additional Subject ${index + 1}`}
                fullWidth
                value={formData.subjects[index]}
                name={`subject${index + 1}`}
                onChange={(e) => handleSubjectChange(index, e.target.value)}
              />
            </Grid>
          )
        )}

        {/* Contact Details */}
        <Grid item xs={12} sm={4}>
          <TextField
            label="Student's Mobile Number"
            fullWidth
            value={formData.contactDetails.studentMobile}
            name="contactDetails.studentMobile"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Father's Mobile Number"
            fullWidth
            value={formData.contactDetails.fatherMobile}
            name="contactDetails.fatherMobile"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Mother's Mobile Number"
            fullWidth
            value={formData.contactDetails.motherMobile}
            name="contactDetails.motherMobile"
            onChange={handleInputChange}
          />
        </Grid>

        {/* Documents Upload */}
        <Grid item xs={12} sm={4}>
          <input
            type="file"
            name="marksheet"
            onChange={handleFileChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <input
            type="file"
            name="casteCertificate"
            onChange={handleFileChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            style={{ width: "100%" }}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Box textAlign="center">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegForm10and12;
