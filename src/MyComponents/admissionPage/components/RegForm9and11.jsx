import React, { useState } from "react";
import { jsPDF } from "jspdf";
import FormInstruction from "./FormInstruction";
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
} from "@mui/material";

const RegForm9and11 = () => {
  const [formData, setFormData] = useState({
    class: "",
    section: "",
    candidatename: "",
    mothername: "",
    fathername: "",
    gender: "",
    cast: "",
    religion: "",
    disabilities: "",

    subjects: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //for checkbox data
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, name],
      });
    } else {
      setFormData({
        ...formData,
        subjects: formData.subjects.filter((subject) => subject !== name),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    // Horizontal line
    doc.line(10, 22, pageWidth - 10, 22);
    doc.text(".....Receipt....", 100, 20);
    doc.text(`Class: ${formData.class}`, 20, 30);
    doc.text(`Section: ${formData.section}`, 100, 30);
    doc.text(`Candidate's Name: ${formData.candidatename}`, 20, 40);
    doc.text(`Mother's Name: ${formData.mothername}`, 20, 50);
    doc.text(`Father's Name: ${formData.fathername}`, 20, 60);
    doc.text(`Gender: ${formData.gender}`, 20, 70);
    doc.text(`Cast: ${formData.cast}`, 20, 80);
    doc.text(`Religion: ${formData.religion}`, 20, 90);
    doc.text(`Disabilities: ${formData.disabilities}`, 20, 100);
    doc.text(`Subjects: ${formData.subjects}`, 20, 110);

    doc.save("form-data.pdf");
  };

  return (
    <div maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <FormInstruction />
        <Grid
          container
          spacing={2}
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80px",
            maxHeight: "150px",
            textAlign: "center",
            backgroundColor: "whitesmoke",
            maxWidth: "80%",
            padding: "0",
            margin: "auto", // center grid
            marginBottom: "20px",
            fontWeight: "650",
          }}
        >
          <Grid item xs={12} md={4} p={0}>
            SCHOOL CODE: 15026
          </Grid>
          <Grid item xs={12} md={4}>
            CBSE AFFL NO. : 3330050
          </Grid>
          <Grid item xs={12} md={4}>
            UDISE CODE: 22110408708
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
                // sx={{ width: 300 }}
              >
                <MenuItem value="">Select Class</MenuItem>
                <MenuItem value="9th">9th</MenuItem>
                <MenuItem value="11th">11th</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4.01}>
              <TextField
                fullWidth
                label="Section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                // sx={{ width: 300 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Candidate's Name"
                name="candidatename"
                value={formData.candidatename}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Mother's Name"
                name="mothername"
                value={formData.mothername}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Father's Name"
                name="fathername"
                value={formData.fathername}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select Genter</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Trans">Trans</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Cast"
                name="cast"
                value={formData.cast}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select Cast</MenuItem>
                <MenuItem value="GEN">GEN</MenuItem>
                <MenuItem value="ST">ST</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="OBC">OBC</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Disabilities"
                name="disabilities"
                value={formData.disabilities}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="NA">NA</MenuItem>
                <MenuItem value="Blind">Blind</MenuItem>
                <MenuItem value="Deaf">Deaf</MenuItem>
                <MenuItem value="Handicapped">Handicapped</MenuItem>
                <MenuItem value="Dyslexis">Dyslexis</MenuItem>
              </TextField>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                border: "1px solid rgb(182, 182, 182)",
                borderRadius: "5px",
                margin: "15px",
                
              }}
            >
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Subjects</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Math")}
                        onChange={handleCheckboxChange}
                        name="Math"
                      />
                    }
                    label="Math"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Science")}
                        onChange={handleCheckboxChange}
                        name="Science"
                      />
                    }
                    label="Science"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("English")}
                        onChange={handleCheckboxChange}
                        name="English"
                      />
                    }
                    label="English"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("History")}
                        onChange={handleCheckboxChange}
                        name="History"
                      />
                    }
                    label="History"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Computer")}
                        onChange={handleCheckboxChange}
                        name="Computer"
                      />
                    }
                    label="Computer"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Additional")}
                        onChange={handleCheckboxChange}
                        name="Additional"
                      />
                    }
                    label="Additional"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default RegForm9and11;
