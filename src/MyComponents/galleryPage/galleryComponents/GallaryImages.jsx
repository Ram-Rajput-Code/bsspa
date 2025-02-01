import React from "react";
import { Container, Grid, Card, CardMedia, Typography } from "@mui/material";

const images = {
  eyeAndDental: [
    "/images/Eye_and_Dental/imgd1.jpeg",
    "/images/Eye_and_Dental/imgd2.jpeg",
    "/images/Eye_and_Dental/imgd3.jpeg",
    "/images/Eye_and_Dental/imgd4.jpeg",
    "/images/Eye_and_Dental/imgd5.jpeg",
    "/images/Eye_and_Dental/imgd6.jpeg",
    "/images/Eye_and_Dental/imgd7.jpeg",
    "/images/Eye_and_Dental/imgd8.jpeg",
  ],
  eyeTestCamp: [
    "/images/eye_test_camp/imgc1.jpeg",
    "/images/eye_test_camp/imgc2.jpeg",
    "/images/eye_test_camp/imgc3.jpeg",
    "/images/eye_test_camp/imgc4.jpeg",
    "/images/eye_test_camp/imgc5.jpeg",
    "/images/eye_test_camp/imgc6.jpeg",
    "/images/eye_test_camp/imgc7.jpeg",
    "/images/eye_test_camp/imgc8.jpeg",
  ],
  fireMockDrill: [
    "/images/Fire_Mock_Drill/imgmf1.jpg",
    "/images/Fire_Mock_Drill/imgmf2.jpg",
    "/images/Fire_Mock_Drill/imgmf3.jpg",
    "/images/Fire_Mock_Drill/imgmf4.jpg",
    "/images/Fire_Mock_Drill/imgmf5.jpg",
    "/images/Fire_Mock_Drill/imgmf6.jpg",
    "/images/Fire_Mock_Drill/imgmf7.jpg",
    "/images/Fire_Mock_Drill/imgmf8.jpg",
    "/images/Fire_Mock_Drill/imgmf9.jpg",
    "/images/Fire_Mock_Drill/imgmf10.jpg",
    "/images/Fire_Mock_Drill/imgmf11.jpg",
  ],
};

const GalleryImages = () => {
  return (
    <Container className="mt-4">
      {/* Eye and Dental Section */}
      <section className="mb-5">
        <Typography variant="h3" style={{ textAlign: 'center', color: '#007bff', fontWeight: 'bold' }} className="mb-4">
          Eye and Dental
        </Typography>
        <Grid container spacing={3}>
          {images.eyeAndDental.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="shadow-sm" style={{ borderRadius: '3px', border: '0px solid #ccc' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={src}
                  alt="Eye and Dental"
                  style={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Eye Test Camp Section */}
      <section className="mb-5">
        <Typography variant="h3" style={{ textAlign: 'center', color: '#28a745', fontWeight: 'bold' }} className="mb-4">
          Eye Test Camp
        </Typography>
        <Grid container spacing={3}>
          {images.eyeTestCamp.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="shadow-sm" style={{ borderRadius: '3px', border: '0px solid #ccc' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={src}
                  alt="Eye Test Camp"
                  style={{ objectFit: 'cover', borderRadius: '0' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Fire Mock Drill Section */}
      <section className="mb-5">
        <Typography variant="h3" style={{ textAlign: 'center', color: '#dc3545', fontWeight: 'bold' }} className="mb-4">
          Fire Mock Drill
        </Typography>
        <Grid container spacing={3}>
          {images.fireMockDrill.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="shadow-sm" style={{ borderRadius: '3px', border: '0px solid #ccc' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={src}
                  alt="Fire Mock Drill"
                  style={{ objectFit: 'cover', borderRadius: '0px' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
};

export default GalleryImages;
