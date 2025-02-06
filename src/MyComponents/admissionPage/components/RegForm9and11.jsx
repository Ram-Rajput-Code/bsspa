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
    annualincome: "",
    dob: "",
    onlychildofparent: "",
    admissionsn: "",
    dateofadmission: "",
    minority: "",
    aadharnumber: "",
    bankaccnumber: "",
    ifsccode: "",
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
   
    doc.text(
      `Annual Income of Father & Mother: ${formData.annualincome}`,
      20,
      120
    );
    doc.text(`Date of Birth: ${formData.dob}`, 20, 130);
    doc.text(`Onlychild of the Parent: ${formData.onlychildofparent}`, 20, 140);
    doc.text(`Admission Serial Number: ${formData.admissionsn}`, 20, 150);
    doc.text(`Date of Admission: ${formData.dateofadmission}`, 20, 160);
    doc.text(`Minority: ${formData.minority}`, 20, 170);
    doc.text(`Aadhar Number: ${formData.aadharnumber}`, 20, 180);
    doc.text(`Bank Acc Number: ${formData.bankaccnumber}`, 20, 190);
    doc.text(`IFSC Code: ${formData.ifsccode}`, 20, 200);
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
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Annual Income of Father & Mother"
                name="annualincome"
                value={formData.annualincome}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Date Of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Only Child of the Parent"
                name="onlychildofparent"
                value={formData.onlychildofparent}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Admission Serial Number"
                name="admissionsn"
                value={formData.admissionsn}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Date Of Admission"
                name="dateofadmission"
                type="date"
                value={formData.dateofadmission}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Minority"
                name="minority"
                value={formData.minority}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Aadhar Number"
                name="aadharnumber"
                value={formData.aadharnumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Bank Acc Number"
                name="bankaccnumber"
                value={formData.bankaccnumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="IFSC Code"
                name="ifsccode"
                value={formData.ifsccode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              width: 200,
              display: "flex",
              margin: "auto",
              marginTop: "10px",
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default RegForm9and11;
