import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

const formData = [
  {
    id: 1,
    formName: "ANNUAL EXAMINATION 2020-21",
    downloadLink: "/forms/annual_exam_2020_21.pdf",
  },
  { id: 2, formName: "tc001", downloadLink: "/forms/tc001.pdf" },
  {
    id: 3,
    formName: "SCIENCE OLYMPIAD FOUNDATION RESULT",
    downloadLink: "/forms/science_olympiad_result.pdf",
  },
  {
    id: 4,
    formName: "CCE ACTIVITY RESULT 2016-17",
    downloadLink: "/forms/cce_activity_result_2016_17.pdf",
  },
];

const Academic = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 600, margin: "20px auto" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>ID</strong>
            </TableCell>
            <TableCell>
              <strong>FORM NAME</strong>
            </TableCell>
            <TableCell>
              <strong>DOWNLOAD FORM</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map((form) => (
            <TableRow key={form.id}>
              <TableCell>{form.id}</TableCell>
              <TableCell>{form.formName}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                  href={form.downloadLink}
                  download
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Academic;
