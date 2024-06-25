import { Typography, Grid } from "@mui/material";
import data from "../data.json";
import TourCard from "./TourCard";
function CiteName() {
  return (
    <>
      {data.map((cite, index) => (
        <>
          <Typography
            variant="h4"
            component="h2"
            marginBottom={3}
            marginTop={5}
            key={index}
          >
            Top {cite.name} Tours
          </Typography>
          <Grid container spacing={5}>
            {cite.tours.map((tour, index) => (
              <TourCard tour={tour} key={index} />
            ))}
          </Grid>
        </>
      ))}
    </>
  );
}

export default CiteName;
