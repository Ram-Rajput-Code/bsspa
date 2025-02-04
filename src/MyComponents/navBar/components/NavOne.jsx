import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Box, Typography, Stack } from "@mui/material";

export default function NavOne() {
  return (
    <Box sx={{ backgroundColor: "#f68a15", width: "100%" }}>
      <Container style={{ padding: "0" }}>
        <Row
          className="align-items-center"
          style={{ backgroundColor: "#f68a15" }}
        >
          {/* Email Section */}
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start mb-2 mb-md-0"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <MdOutlineMail
                style={{
                  fontSize: "1.5rem",
                  marginRight: "10px",
                  color: "white",
                }}
              />
              <Typography variant="body1" color="white">
                bsspranavanandaacademy10@gmail.com
              </Typography>
            </Box>
          </Col>

          {/* Navigation Links */}
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <Stack direction="row" spacing={2}>
              <Link
                to="/MandatoryDisclosure"
                className="text-white text-decoration-none"
              >
                <Button variant="link" className="text-white">
                  Mandatory Disclosure
                </Button>
              </Link>
              <Link to="/gallery" className="text-white text-decoration-none">
                <Button variant="link" className="text-white">
                  Gallery
                </Button>
              </Link>
              <Link to="/contact" className="text-white text-decoration-none">
                <Button variant="link" className="text-white">
                  Contact Us
                </Button>
              </Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
