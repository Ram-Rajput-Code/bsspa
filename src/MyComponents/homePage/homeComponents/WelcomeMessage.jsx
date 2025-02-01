import React, { useState } from "react";
import { 
  Grid, Typography, Card, CardContent, CardMedia, Accordion, 
  AccordionSummary, AccordionDetails 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WelcomeMessage() {
  const text = `Parnavananda Academy, run by Bharat Sevashram Sangha, with its diversified academic activities 
  in various parts of the country, has come into existence in Raipur, commemorating the Centenary Celebrations 
  of Swami Pranavanandaji Maharaj. At present, the school stands on a 5-acre plot of land donated by Shishu 
  Shiksha Samiti by virtue of the relentless efforts of a devotee of “Bharat Sevashram Sangha,” located on VIP Road 
  leading to Mana Airport. The construction of the school started in April 1996, covering an area of 82,200 sq. ft. 
  to accommodate students from pre-primary to class XII.`;

  const moreText = `The aim of the academy is to grow in the field of college education in all branches and disciplines 
  and earn a reputation as a Universal Pedestal of Learning. The Bharat Sevashram Sangha, a philanthropic, charitable, 
  socio-religious organization founded over 80 years ago by Acharya Shrimat Swami Parnavanandaji Maharaj, is dedicated 
  to the well-being of mankind. The Sangha has a wide missionary network and education projects, with more than 60 branches 
  and 600 Unity Centers across India and abroad, including the UK, USA, Canada, South America, Guyana, Trinidad, the Far-East, 
  and Bangladesh.`;

  return (
    <Card sx={{ maxWidth: "98%", margin: "auto", mt: 4, p: 2 }}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Side: Text Section */}
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h5" align="center" fontWeight="bold">
              Welcome to
            </Typography>
            <Typography variant="h4" align="center" color="primary" fontWeight="bold">
              Bharat Sevashram Sangha Pranavananda Academy
            </Typography>
            <Typography variant="body1" paragraph>
              {text}
            </Typography>

            {/* Read More Accordion */}
            <Accordion elevation={0} sx={{ boxShadow: "none", bgcolor: "transparent" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                <Typography variant="body2" color="text.secondary">
                  Read more
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{moreText}</Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Grid>

        {/* Right Side: Image Section */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="/images/bodyimg.jpg"
            alt="School Image"
            sx={{
              borderRadius: 2,
              border: "1px solid gray",
              height: { xs: 250, md: 400 },
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
