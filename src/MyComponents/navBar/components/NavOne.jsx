import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Box, Typography } from "@mui/material";

export default function NavOne() {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: "#f68a15" }}>
      <Row className="d-flex justify-content-between align-items-center">
        <Col>
          <Box display="flex" alignItems="center">
            <MdOutlineMail style={{ fontSize: "1.5rem", marginRight: "10px" }} />
            <Typography variant="body1" color="white">
              bsspranavanandaacademy10@gmail.com
            </Typography>
          </Box>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link to="/gallery" className="text-white text-decoration-none mx-2">
            <Button variant="link" className="text-white">
              Gallery
            </Button>
          </Link>
          <Link to="/contact" className="text-white text-decoration-none mx-2">
            <Button variant="link" className="text-white">
              Contact Us
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
