import React from "react";
import { Grid, Typography, Container } from "@mui/material";

const data = {
  text: "The Acharya was born in the year 1896 A.D. From the very childhood the boy would almost always remain immersed in meditation and self contemplation. As the grew older he began to meditate profoundly on the transitoriness of world, on the frailities and futilities of mundane existence. In his boyhood, initiated himself from Yogiraj Gambhirnathji he passed his time always in deep meditation in the jungle adjacent to Gorakhpur Math, Akash Ganga at Gaya and Ashighat at Varanasi. There he passed his time merged in intense meditation. Later in the year 1916, on Holy day of Poush Purnima, he started deep self mortification and just after one month in the Holy Day of magha Purnima he obtained salvation (Siddhi) and hence the Bharat Sevashram Sangha was established on the basis of ‘Atmana Mokshartham Jagat Hitaya Cha’ philosophy. The great Acharya declared that thus time is an age of Universal Emancipation. Within a short period the great Acharya started his humanitarian activities through different branches of the Sangha all over the country. Whenever there be any calamities such a flood, famine, cyclone, earthquake or any major epidemic such as cholera, plague etc. Sangha came forward for the rescue. Sangha started to serve the pilgrims at the distant pilgrim centre based on the Tirtha Sanskar movement by the great Acharya. Lakhs of piligrims are benefited at the time of big fair such as Kumbha, Soalr, Eclipse, Godavari Pushkaram etc.",
  image: "/images/PRANAVANANADJI.jpg",
};

const FounderOfBSSPA = () => {
  return (
    <Container className="py-4">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side -  */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" className="mb-2">
            {data.text}
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} className="text-center">
          <img
            src={data.image}
            alt="Dynamic"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "400px", objectFit: "cover" }} 
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FounderOfBSSPA;
